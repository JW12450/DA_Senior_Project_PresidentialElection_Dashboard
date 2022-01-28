import React, {useEffect, useState } from 'react';
import data from "../data";
import "../css/command.css";

function TypeResult(props){

    var [loading, setLoading] = useState(false);


    useEffect(() => {
        if (props.bool === true) {
          setLoading(true);
        } else{
            setLoading(false);
        }
      }, [props.bool])


    var [showResult, setShowResult] = useState(false);

    return(
        <div>
            {loading === true ? <p className='answer'>잠시만 기다려주세요</p>: null}
 
        </div>

    )

}

export default TypeResult;


function Result(props){
    return(          
         <p className='answer'> : 당신의 정치성향은 {props.data.type}입니다 </p>
    );
}