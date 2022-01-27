import React from 'react';
import progress from "../wordcloud/progress_wc.png" ;
import conservative from "../wordcloud/conserve_wc.png" ;
import moderate from "../wordcloud/moderate_wc.png" ;
import {Routes, Route, Link, useParams} from 'react-router-dom';
import "../css/wordcloud.css";


    var contents = [
        {id : "1", title: "진보", src: progress},
        {id: "2", title: "보수", src:conservative},
        {id: "3", title: "중도", src:moderate}]

        function WC(){
            var parmas = useParams();
            var topic_id = parmas.id;
            var selected_topic={
                title:"올바른 경로가 아닙니다",
                src : null
            }

            for(var i=0; i<contents.length; i++){
                if(Number(contents[i].id) === Number(topic_id)){
                 selected_topic.title = contents[i].title;
                 selected_topic.src = contents[i].src;
                 break;
                }
              } 
              return(
                <div  className='party_wc_container'>
                    <p> 
                    <img className="party_wc_img" src={selected_topic.src}></img>
                    </p>
                </div>
                );
            }

   

function PartyWordCloud(){

    var lis =[];
    for(var i=0; i<contents.length;i++){
      lis.push(<p key={contents[i].id}><Link className={"Party"+contents[i].id} to={contents[i].id}>{contents[i].title}</Link></p>)
    };


    return(
        <div>
        <h2 className='party_wc_title'> ▶ 정치성향별 관심 키워드 보기</h2>
        <div>
        {lis}
        </div>

        <Routes>
            <Route path=":id" element={<WC/>}> </Route>
        </Routes>
    </div>);
}

export default PartyWordCloud;