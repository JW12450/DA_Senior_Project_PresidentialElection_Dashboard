from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from openpyxl import Workbook
from tqdm import tqdm
import pyautogui
import time
import pandas as pd
import numpy as np

# 사용자 입력
category = pyautogui.prompt('공약 카테고리를 입력하세요(시트명 그대로)')
last_com = int(pyautogui.prompt("한 기사당 최대로 수집할 댓글수를 입력하세요(20개단위)"))

# 데이터 입력할 엑셀, 엑셀시트 생성하기
wb = Workbook()
ws = wb.active
ws.title = category
ws.append(['후보명','언론사','기사제목','기사링크','좋아요','싫어요','남성비율','여성비율','10대','20대','30대','40대','50대','60대 이상','댓글'])
ws.column_dimensions['C'].width = 60
ws.column_dimensions['O'].width = 120


# 데이터 로드
data = pd.read_excel('article_urls.xlsx', sheet_name = category)
candidates = data['후보']
urls = data['url']

article_num = 1
for candidate, url in tqdm(zip(candidates, urls)):
    options = webdriver.ChromeOptions()
    options.add_argument('headless')  # 주석처리 할 시 창 띄우면서 크롤링
    browser = webdriver.Chrome('./chromedriver', chrome_options=options)
    browser.get(url)
    time.sleep(1)

    # 기사정보 수집
    browser.implicitly_wait(2)
    press_name = browser.find_element_by_css_selector(".press_logo > a > img").get_attribute('title') #str
    article_title = browser.find_element_by_css_selector("#articleTitle").text 
    article_like = browser.find_element_by_css_selector("#spiLayer > div._reactionModule.u_likeit > ul > li.u_likeit_list.good > a > span.u_likeit_list_count._count").text
    article_hate = browser.find_element_by_css_selector("#spiLayer > div._reactionModule.u_likeit > ul > li.u_likeit_list.angry > a > span.u_likeit_list_count._count").text
    time.sleep(1.5)

    # case1)댓글보기 > 더보기 
    # case2)댓글더보기 > 더보기 
    try:
        browser.find_element_by_css_selector("a.simplecmt_link.is_navercomment").click()
        time.sleep(1)
    except: 
        browser.find_element_by_css_selector(".u_cbox_btn_view_comment").click()
        time.sleep(1)

    try:
        percents = browser.find_elements_by_css_selector(".u_cbox_chart_per")
        percent_man = percents[0].text
        percent_woman = percents[1].text
        percent_10 = percents[2].text
        percent_20 = percents[3].text
        percent_30 = percents[4].text
        percent_40 = percents[5].text
        percent_50 = percents[6].text
        percent_60 = percents[7].text
    except:
        print("=======================댓글 성별 및 연령층 정보가 없습니다.=========================")
        percent_man = 0
        percent_woman = 0
        percent_10 = 0
        percent_20 = 0
        percent_30 = 0
        percent_40 = 0
        percent_50 = 0
        percent_60 = 0
    print(f'=========================={article_num}번째 기사입니다=================================')
    article_num += 1

    # 더보기 클릭, 한번당 20개씩 추가
    click_num = 0
    while True:
        try:
            if click_num == last_com/20-1 : # 클릭횟수 제한(=댓글수 제한)
                break
            browser.implicitly_wait(5)
            browser.find_element_by_css_selector("a.u_cbox_btn_more").click()
            click_num += 1
            time.sleep(1)
        except:
            break

    # 댓글 수집
    comments = browser.find_elements_by_css_selector(".u_cbox_text_wrap")
    com_num = 1  # 댓글 개수
    for comment in comments:
        if comment.text == '작성자에 의해 삭제된 댓글입니다.':
            continue
        elif comment.text == '클린봇이 부적절한 표현을 감지한 댓글입니다.':
            continue
        print(com_num, comment.text)
        ws.append([candidate, press_name, article_title, url, article_like, article_hate, percent_man,
        percent_woman,percent_10,percent_20,percent_30,percent_40,percent_50,percent_60,comment.text])
        com_num += 1
        wb.save(f'./{category}_result.xlsx')

wb.save(f'./{category}_result.xlsx')
