import React from 'react';
import CanButton from "./Can_button";
import HomeButton from "./HomeButton";
//import Pye1 from "../pyechart/Pye1.html";

function Total(){
    return (
        <div>
            <HomeButton></HomeButton>
            <CanButton can_id ="0"></CanButton>
            <CanButton  can_id ="1"></CanButton>
            <CanButton  can_id ="2"></CanButton>

        </div>
    );
}

export default Total;
