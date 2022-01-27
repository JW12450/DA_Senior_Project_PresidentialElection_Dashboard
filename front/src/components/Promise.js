import React from "react";
import {Routes, Route, Link, useParams} from 'react-router-dom';
import "../css/promise.css";

var contents = [
    {id : "1", title: "국방/안보", desc: "국방"},
    {id: "2", title: "경제/부동산", desc: "경제"},
    {id: "3", title: "도덕성/논란", desc: "도덕성"},
    {id : "4", title: "코로나/방역", desc:"코로나"},
    {id: "5", title: "젠더이슈", desc:"젠더"}
]
    function Category(){
        var parmas = useParams();
        var topic_id = parmas.id;
        var selected_topic={
            title:"올바른 경로가 아닙니다",
            src : null
        }

        for(var i=0; i<contents.length; i++){
            if(Number(contents[i].id) === Number(topic_id)){
             selected_topic.title = contents[i].title;
             selected_topic.desc = contents[i].desc;
             break;
            }
          } 
          return(
            <div>
                <div className="Promise"> <p className="Container">{selected_topic.desc}</p></div>
            </div>
            );
        }



function Promise(){
    var lis =[];
    for(var i=0; i<contents.length;i++){
      lis.push(<p key={contents[i].id}><Link className="Category" to={contents[i].id}>{contents[i].title}</Link></p>)
    };

    return(
        <div>
            <h2 className="categorytitle"> ▶ 카테고리별 공약 알아보기</h2>
            {lis}
    
        <Routes>
            <Route path=":id" element={<Category/>}> </Route>
        </Routes>
    </div>);
}

export default Promise;