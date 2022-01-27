import React from 'react';
import HomeButton from "./HomeButton";
import Pye from "./Pye";
import Promise from './Promise';
import CanWordCloud from './CanWordCloud';
import CanHome from './CanHome';
//import A from "../pyechart/a.html";

function Lee(){
 //   const MyHtml = `${A}`;
 //   const mySafeHTML = DOMPurify.sanitize(MyHtml);
    return (
  
        <div>
            <CanHome  id="0"></CanHome>
            <Promise>   </Promise>
            <Pye> </Pye>
            <Pye> </Pye>
            <CanWordCloud id="0"></CanWordCloud>
        </div>
    );
}

export default Lee;
