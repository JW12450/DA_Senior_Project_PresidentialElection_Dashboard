import React from 'react';
import HomeButton from "./HomeButton";
import Pye from "./Pye";
import Promise from './Promise';
import CanWordCloud from './CanWordCloud';
import CanHome from './CanHome';
//import A from "../pyechart/a.html";

function Yoon(){
 //   const MyHtml = `${A}`;
 //   const mySafeHTML = DOMPurify.sanitize(MyHtml);
    return (
  
        <div>
            <CanHome id="1"></CanHome>
            <Promise name="yoon">  </Promise>
            <Pye title="> 후보 전체 호감도" src="http://ec2-15-164-49-201.ap-northeast-2.compute.amazonaws.com:8080/yoon_good/"> </Pye>
            <Pye title="> 나이별 관심 분야" src="http://ec2-15-164-49-201.ap-northeast-2.compute.amazonaws.com:8080/age_yoon/"> </Pye>
            <Pye title="> 성별 관심 분야" src="http://ec2-15-164-49-201.ap-northeast-2.compute.amazonaws.com:8080/sex_yoon/"> </Pye>
            <CanWordCloud id="1"></CanWordCloud>
        </div>
    );
}

export default Yoon;
