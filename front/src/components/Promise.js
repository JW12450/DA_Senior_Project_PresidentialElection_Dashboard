import React from "react";
import {Routes, Route, Link, useParams} from 'react-router-dom';
import "../css/promise.css";
import lee from '../promise/LeeCategoryPromise';
import yoon from '../promise/YoonCategoryPromise';
import ahn from '../promise/AnhCategoryPromise';


    function Category(props){

        if(props.can_name==="lee"){
            var contents = lee;
        } else if(props.can_name === 'yoon'){
            var contents =yoon;
        } else {var contents = ahn;}
    

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



function Promise(props){
    if(props.name==="lee"){
        var contents = lee;
    } else if(props.name === 'yoon'){
        var contents =yoon;
    } else {var contents = ahn;}

    var lis =[];
    for(var i=0; i<contents.length;i++){
      lis.push(<p key={contents[i].id}><Link className={"Category"+contents[i].id} to={contents[i].id}>{contents[i].title}</Link></p>)
    };

    return(
        <div>
            <h2 className="categorytitle"> ▶ 카테고리별 공약 알아보기</h2>
            {lis}
    
        <Routes>
            <Route path=":id" element={<Category can_name={props.name} />}> </Route>
        </Routes>
    </div>);
}

export default Promise;