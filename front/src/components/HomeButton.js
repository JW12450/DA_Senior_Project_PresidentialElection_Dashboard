import React from 'react';
import {Link} from "react-router-dom";
import "../css/HomeButton.css";

function HomeButton(){
    return (
        <Link className='Homebtn' to="../"> ◀ 홈으로</Link>
    );
}

export default HomeButton;