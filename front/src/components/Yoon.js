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
            <Promise name="yoon">   </Promise>
            <Pye> </Pye>
            <Pye> </Pye>
            <CanWordCloud id="1"></CanWordCloud>
        </div>
    );
}

export default Yoon;
