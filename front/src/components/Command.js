import React,{useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import "../css/command.css";
import "../font/font.css";

function Command(){
    var dispatch = useDispatch();
    const [text, setText] = useState(" ");

    function InputText(e){
        setText(e.target.value);
    }

    function Reset(e){
        setText("");
    }

    return(
        <div className="commandcontainer">
        <div>
            <p className="commandtitle"  style={{fontFamily:"Cafe24Oneprettynight"}}> > 댓글로 나의 정치 성향 알아보기</p>
            <textarea value={text} onChange={InputText} placeHolder="이번 선거에 대한 당신의 전반적인 견해를 입력해주세요" className="commandbox"></textarea></div>
            <input type="button" value="다시 입력하기" onClick={Reset} className="resetbtn" style={{fontFamily:"Cafe24Oneprettynight"}}></input>
            <input type="button" value="나의 정치성향 알아보기" onClick={()=> {dispatch({type:"ENTER", answer:text});}} className="enter_btn" style={{fontFamily:"Cafe24Oneprettynight"}}></input>
        </div>
    );

}


export default Command;