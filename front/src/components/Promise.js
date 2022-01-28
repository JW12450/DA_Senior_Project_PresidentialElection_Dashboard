import React,{useState} from "react";
import {Routes, Route, Link, useParams} from 'react-router-dom';
import "../css/promise.css";
import "../font/font.css";
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
                <div className="Promise"> <p className={props.can_name+"Category"+contents[i].id}>{selected_topic.desc}</p></div>
            </div>
            );
        }



function Promise(props){

    
    const [TextColor, setTextColor] = useState({
        color1 : "white",
        color2 : "white",
        color3 : "white",
        color4 : "white",
        color5 : "white"
    })

    function ColorChange1(){
        setTextColor({
            color1 : "yellow",
            color2 : "white",
            color3 : "white",
            color4 : "white",
            color5 : "white"
        })
    }

    
    function ColorChange2(){
        setTextColor({
            color1 : "white",
            color2 : "yellow",
            color3 : "white",
            color4 : "white",
            color5 : "white"
        })
        
    }

    
    function ColorChange3(){
        setTextColor({
            color1 : "white",
            color2 : "white",
            color3 : "yellow",
            color4 : "white",
            color5 : "white"
        })
    }

        
    function ColorChange4(){
        setTextColor({
            color1 : "white",
            color2 : "white",
            color3 : "white",
            color4 : "yellow",
            color5 : "white"
        })
    }
        
    function ColorChange5(){
        setTextColor({
            color1 : "white",
            color2 : "white",
            color3 : "white",
            color4 : "white",
            color5 : "yellow"
        })
    }

    if(props.name==="lee"){
        var contents = lee;
    } else if(props.name === 'yoon'){
        var contents =yoon;
    } else {var contents = ahn;}

    return(
        <div>
            <h2 className="categorytitle" style={{fontFamily:"Cafe24Oneprettynight"}}> > 카테고리별 공약 알아보기</h2>
            <p key={contents[0].id}><Link className={"Category"+contents[0].id} to={contents[0].id} onClick={ColorChange1} style={{color:TextColor.color1}}>{contents[0].title}</Link></p>
            <p key={contents[1].id}><Link className={"Category"+contents[1].id} to={contents[1].id} onClick={ColorChange2} style={{color:TextColor.color2}}>{contents[1].title}</Link></p>
            <p key={contents[2].id}><Link className={"Category"+contents[2].id} to={contents[2].id} onClick={ColorChange3} style={{color:TextColor.color3}}>{contents[2].title}</Link></p>
            <p key={contents[3].id}><Link className={"Category"+contents[3].id} to={contents[3].id} onClick={ColorChange4} style={{color:TextColor.color4}}>{contents[3].title}</Link></p>
            <p key={contents[4].id}><Link className={"Category"+contents[4].id} to={contents[4].id} onClick={ColorChange5} style={{color:TextColor.color5}}>{contents[4].title}</Link></p>

        <Routes>
            <Route path=":id" element={<Category can_name={props.name} />}> </Route>
        </Routes>
    </div>);
}

export default Promise;