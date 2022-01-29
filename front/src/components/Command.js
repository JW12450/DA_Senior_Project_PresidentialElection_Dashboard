import React,{useEffect, useState} from "react";
import "../css/command.css";
import "../font/font.css";import "./TypeResult";
import TypeResult from "./TypeResult";
import axios from 'axios';

function Command(){

    const [text,setText] = useState("");
    const [load,setLoad] = useState(false);

  function InputText(e){
        setText(e.target.value);
    }

    function Reset(e){
        setText("");
        setLoad(false);
        setIndex(null);
    }
    const [Index, setIndex] = useState(null);
    const sendcommand=()=>{

        setLoad(true);
        console.log(text)
        //여기서 보내고 받아오기 다 하기, props로 type result에 넘겨주기
        axios.post("https://fbbd3ce4-ec2a-48fe-8483-17916fb08db7.mock.pstmn.io/postparty",{text},{
            headers: { "Content-Type": `application/json`}
            })
        .then((res)=>console.log(res.config.data))
        .catch((err)=> console.log(err))
        
        axios.get("https://52407797-85c0-49f5-b5ac-08d53268f097.mock.pstmn.io/party")
        .then((res)=> {setIndex(res.data.id)})
        .catch((err)=>{console.log(err)})
    }

    return(
        <div className="commandcontainer">
        <div>
            <p className="commandtitle"  style={{fontFamily:"Cafe24Oneprettynight"}}> > 댓글로 나의 정치 성향 알아보기</p>
            <textarea value={text} onChange={InputText} placeHolder="이번 선거에 대한 당신의 전반적인 견해를 입력해주세요" className="commandbox"></textarea></div>
            <input type="button" value="다시 입력하기" onClick={Reset} className="resetbtn" style={{fontFamily:"Cafe24Oneprettynight"}}></input>
            <input type="button" value="나의 정치성향 알아보기" onClick={sendcommand} className="enter_btn" style={{fontFamily:"Cafe24Oneprettynight"}}></input>
            <TypeResult bool={load} id={Index}> </TypeResult>
        </div>
    );

}


export default Command;