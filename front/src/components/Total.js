import React from 'react';
import CanButton from "./Can_button";
import HomeButton from "./HomeButton";
import Command from "./Command";
import Pye from "./Pye";
import PartyWordCloud
 from './PartyWordColud';
function Total(){
    return (
        <div>
            <HomeButton></HomeButton>
            <Pye title="> 나이 별 관심분야" src="http://ec2-15-164-49-201.ap-northeast-2.compute.amazonaws.com:8080/whole_age/" ></Pye>
            <Pye title="> 성별 관심 분야" src='http://ec2-15-164-49-201.ap-northeast-2.compute.amazonaws.com:8080/whole_sex/'></Pye>
            <PartyWordCloud></PartyWordCloud>
            <div style={{position:"relative",clear:"both"}}> {/*  <Command> </Command>*/}
            <CanButton can_id ="0"></CanButton>
            <CanButton  can_id ="1"></CanButton>
            <CanButton  can_id ="2"></CanButton>
            </div>
        </div>
    );
}

export default Total;
