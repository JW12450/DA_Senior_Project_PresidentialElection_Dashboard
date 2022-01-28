import React from 'react';
import {Link} from "react-router-dom";
import "../css/HomeButton.css";
import "../font/font.css";

function HomeButton(){
    return (
        <Link className='Homebtn' to="../" style={{fontFamily:"paybooc-Bold"}}> ◀ 이전으로</Link>
    );
}

export default HomeButton;