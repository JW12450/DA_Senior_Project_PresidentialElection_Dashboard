import React, {useEffect, useState } from 'react';
import data from "../data";
import "../css/command.css";

function TypeResult(props){
    var index = Number(props.id);

    var [loading, setLoading] = useState(false);

    useEffect(() => {
        if (props.bool === true) {
          setLoading(true);
        } else{
            setLoading(false);
        }
      }, [props.bool])



    var [showResult, setShowResult] = useState(false);


    useEffect(() => {
        if(props.id != null){
        setLoading(false);
        setShowResult(true);} 
      }, [props.id])

    return(
        <div>
            {loading === true ? <p className='answer'>잠시만 기다려주세요</p>: null}
            {showResult === true ? <p className='answer'> 당신의 성향은 {data[index].type} 입니다</p>:null}
        </div>

    )

}

export default TypeResult;


function Result(props){
    return(          
         <p className='answer'> : 당신의 정치성향은 {props.data.type}입니다 </p>
    );
}