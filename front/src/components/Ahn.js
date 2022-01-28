import React from 'react';
import HomeButton from "./HomeButton";
import Pye from "./Pye";
import Promise from './Promise';
import CanWordCloud from './CanWordCloud';
import CanHome from './CanHome';

function Ahn(){

    return (
  
        <div>
            <CanHome id="2"></CanHome>
            <Promise name='ahn'>   </Promise>
            <Pye title="> 후보 전체 호감도" src="http://ec2-15-164-49-201.ap-northeast-2.compute.amazonaws.com:8080/ahn_good/"> </Pye>
            <Pye title="> 나이별 관심 분야" src="http://ec2-15-164-49-201.ap-northeast-2.compute.amazonaws.com:8080/age_ahn/"> </Pye>
            <Pye title="> 성별 관심 분야" src="http://ec2-15-164-49-201.ap-northeast-2.compute.amazonaws.com:8080/sex_ahn/"> </Pye>
            <CanWordCloud id="2"></CanWordCloud>
        </div>
    );
}

export default Ahn;