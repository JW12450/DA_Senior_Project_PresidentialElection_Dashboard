import React from 'react';
import {Link} from "react-router-dom";

function HomeButton(){
    return (
        <Link to="../">
        <button> ◀ 홈으로 돌아가기</button>
        </Link>
    );
}

export default HomeButton;