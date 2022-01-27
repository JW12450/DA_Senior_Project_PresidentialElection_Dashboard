import React from 'react';
import CanButton from "./Can_button";
import HomeButton from "./HomeButton";
import Pye from "./Pye";
import WordCloud from './WordCloud';

function Total(){
    return (
        <div>
            <HomeButton></HomeButton>
            <Pye title="나이 별 관심분야" src="https://sine-x0x.github.io/comingmelona/fig_satisfy"></Pye>
            <Pye title="성별/나이 별 관심 분야" src="https://sine-x0x.github.io/comingmelona/fig_satisfy"></Pye>
            <WordCloud></WordCloud>
            <CanButton can_id ="0"></CanButton>
            <CanButton  can_id ="1"></CanButton>
            <CanButton  can_id ="2"></CanButton>
        </div>
    );
}

export default Total;
