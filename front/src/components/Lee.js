import React from 'react';
import HomeButton from "./HomeButton";
import Pye from "./Pye";
import Promise from './Promise';
import CanWordCloud from './CanWordCloud';
import CanHome from './CanHome';

function Lee(){

    return (
  
        <div>
            <CanHome  id="0"></CanHome>
            <Promise name="lee">   </Promise>
            <Pye title="> 카테고리별 여론" src="http://ec2-15-164-49-201.ap-northeast-2.compute.amazonaws.com:8080/whole_sex/"> </Pye>
            <Pye> </Pye>
            <CanWordCloud id="0"></CanWordCloud>
        </div>
    );
}

export default Lee;
