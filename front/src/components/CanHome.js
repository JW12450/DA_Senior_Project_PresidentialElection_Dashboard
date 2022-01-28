import React,{useState} from "react";
import HomeButton from "./HomeButton";
import "../css/Home.css";
import "../font/font.css";
import lee from "../imgs/lee.png";
import ahn from "../imgs/an.png";
import yoon from "../imgs/yoon.png";

function CanHome(props){
    const can_id = Number(props.id);
    const canname = ["이재명", '윤석열', '안철수'];
    const canparty = ["더불어 민주당", "국민의 힘", "국민의 당"];
    const slogan = ["이재명은 합니다","국민이 불러낸 대통령","시대교체"];
    const canimg = [lee, yoon, ahn];

    const [can,setCan] = useState({
        Name : canname[can_id],
        Party: canparty[can_id],
        src: canimg[can_id],
        Slogan : slogan[can_id]
    })

    const CN = "Cannav" + can_id;

    return(
        <div className={CN}>
           <HomeButton></HomeButton>
           <img className="face" src={can.src}></img>
           <div className="Word"> <p style={{fontFamily:"KOTRA_BOLD-Bold"}} className="cannavparty">{can.Party}</p>  
           <p className="cannavname" style={{fontFamily:"paybooc-Bold"}}>{can.Name}</p>  
           <p className="cannavslogan" style={{fontFamily:"Chosunilbo_myungjo"}}>{can.Slogan}</p> </div>
        </div>
    );
}

export default CanHome;