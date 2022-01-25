import React, {useState} from 'react';
import Lee from "../imgs/lee.png";
import Ahn from "../imgs/an.png";
import Yoon from "../imgs/yoon.png";
import {Link} from 'react-router-dom';

function Personal(props){
    const candidate_id = Number(props.can_id);
    const candidate_party = ['더불어 민주당', '국민의 힘', '국민의 당'];
    const candidate_img = [Lee, Yoon, Ahn];
    const candidate_name = ["이재명",'윤석열','안철수'];
    const candidate_promise1 = ["· 기본 시리즈 정책 ",'· 여성 가족부 폐지','· 과학기술 중심 국가 건설'];
    const candidate_promise2 = ["· 스마트 강군 건설",'· 민간 주도 일자리 창출','· 정신 건강 국가 책임제'];
    const candidate_promise3 = ["· 세계 5강 경제대국 달성 ",'· 조세 인하 ','· G5 경제강국 건설'];
    const button_link = ["./lee","./yoon","./ahn"];
    const  [Inputs, setInputs] = useState({
        party: candidate_party[candidate_id],
        img: candidate_img[candidate_id],
        name: candidate_name[candidate_id],
        promise1 : candidate_promise1[candidate_id],
        promise2 : candidate_promise2[candidate_id],
        promise3 : candidate_promise3[candidate_id],
        btlnk : button_link[candidate_id]
    });

    return (
        <div>
            <div style={{border:"solid",float:"left", width:"20%", marginLeft:"10%", borderRadius:"25px"}}>
                <h2>{Inputs.party}</h2>
                <img src={Inputs.img}/>
                <h3>{Inputs.name}</h3>
                <p>{Inputs.promise1}<br/>{Inputs.promise2}<br/>{Inputs.promise3}</p>
                <Link to={Inputs.btlnk}>
                <button> ▶ 자세히 보러가기</button>
                </Link>
            </div>
        </div>
    );
}

export default Personal;
