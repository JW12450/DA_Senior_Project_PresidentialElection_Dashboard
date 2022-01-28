import React,{useState} from 'react';
import progress from "../wordcloud/progress_wc.png" ;
import conservative from "../wordcloud/conserve_wc.png" ;
import moderate from "../wordcloud/moderate_wc.png" ;
import {Routes, Route, Link, useParams} from 'react-router-dom';
import "../font/font.css";
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
                src : null,
                color: "white"
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

    const [TextColor, setTextColor] = useState({
        color1 : "white",
        color2 : "white",
        color3 : "white"
    })

    function ColorChange1(){
        setTextColor({
            color1 : "yellow",
            color2 : "white",
            color3 : "white"
        })
    }

    
    function ColorChange2(){
        setTextColor({
            color1 : "white",
            color2 : "yellow",
            color3 : "white"
        })
        
    }

    
    function ColorChange3(){
        setTextColor({
            color1 : "white",
            color2 : "white",
            color3 : "yellow"
        })
    }




    return(
        <div>
        <h2 className='party_wc_title' style={{fontFamily:"Cafe24Oneprettynight"}}> > 정치성향별 관심 키워드 보기</h2>
        <div>
        <p key={contents[0].id}><Link className={"Party"+contents[0].id} to={contents[0].id} onClick={ColorChange1} style={{fontFamily:"Chosunilbo_myungjo", color:TextColor.color1}}> {contents[0].title}</Link></p>        
        <p key={contents[1].id}><Link className={"Party"+contents[1].id} to={contents[1].id} onClick={ColorChange2}style={{fontFamily:"Chosunilbo_myungjo", color:TextColor.color2}}> {contents[1].title}</Link></p>        
        <p key={contents[2].id}><Link className={"Party"+contents[2].id} to={contents[2].id} onClick={ColorChange3} style={{fontFamily:"Chosunilbo_myungjo", color:TextColor.color3}}> {contents[2].title}</Link></p>        

        </div>

        <Routes>
            <Route path=":id" element={<WC/>}> </Route>
        </Routes>
    </div>);
}

export default PartyWordCloud;