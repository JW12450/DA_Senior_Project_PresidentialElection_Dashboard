import React from 'react';
import Personal from './Personal';
import Logo from "../imgs/logo.png";
import {Link} from "react-router-dom";

function Home(){
    return (
        <div>
            <img src={Logo}/>
            <Personal can_id="0"></Personal>
            <Personal can_id="1"></Personal>
            <Personal can_id="2"></Personal>
            <div>
            <Link to="./total">
            <button> ▶ 전체 여론 보러가기</button>
            </Link>
            </div>
        </div>
    );
}

export default Home;
