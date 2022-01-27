import React from "react";
import lee from "../wordcloud/lee_wc.png";
import yoon from "../wordcloud/yoon_wc.png";
import ahn from "../wordcloud/ahn_wc.png";

function CanWordCloud(props){
    const can_wc = [lee,yoon,ahn];
    const can_name = ["이재명", "윤석열", "안철수"]
    const id =Number (props.id);
    const src = can_wc[id];
    const name = can_name[id];

    return(
        <div>
            <h2 className="can_wc_title">▶ {name} 대표 키워드</h2>
            <img className="can_wc_img" src={src}></img>
        </div>
    );
}

export default CanWordCloud;