import React from 'react';
import Personal from './Personal';
import Logo from "../imgs/logo.png";
import {Link} from "react-router-dom";
import "../css/Home.css";

function Home(){
    return (
        <div className="body">
            <img className="logo" src={Logo}/>
            <Personal can_id="0"></Personal>
            <Personal can_id="1"></Personal>
            <Personal can_id="2"></Personal>
            <div>
            <Link to="./total" className='total_btn' style={{fontFamily:"GmarketSansLight"}}> ▶ 전체 여론 보러가기 </Link>
            </div>
        </div>
    );
}

export default Home;
