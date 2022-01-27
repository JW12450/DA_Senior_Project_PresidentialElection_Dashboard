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
                <div>
                    <img style={{border:"2px white solid",
                    marginTop:"5vh",padding:"40px", marginLeft:"20vw", marginBottom:"7vh", width:"20vw"}}src={selected_topic.src}></img>
                </div>
                );
            }

   

function PartyWordCloud(){
    return(
        <div>
        <h1 style={{marginLeft:"20vw",color:"white"}}> 정치성향별 워드클라우드 보기</h1>
        <div>
        <p key={contents[0].id}><Link to={contents[0].id} className='party'>{contents[0].title}</Link></p>
        <p key={contents[1].id}><Link to={contents[1].id} className='party'>{contents[1].title}</Link></p>
        <p key={contents[2].id}><Link to={contents[2].id} className='party'>{contents[2].title}</Link></p>
        </div>

        <Routes>
            <Route path=":id" element={<WC/>}> </Route>
        </Routes>
    </div>);
}

export default PartyWordCloud;