import React from 'react';
import HomeButton from "./HomeButton";
import DOMPurify from 'dompurify';
import Pye from "./Pye";
//import A from "../pyechart/a.html";

function Lee(){
 //   const MyHtml = `${A}`;
 //   const mySafeHTML = DOMPurify.sanitize(MyHtml);
    return (
  
        <div>
            <HomeButton> </HomeButton>
            <Pye> </Pye>
   {/*         <div dangerouslySetInnerHTML={{ __html: mySafeHTML }} />; */}
            이재명페이지입니다
        </div>
    );
}

export default Lee;
