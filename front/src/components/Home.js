import React from 'react';
import Personal from './Personal';
import Logo from "../imgs/logo.png";

function Home(){
    return (
        <div>
            <img src={Logo}/>
            <Personal can_id="0"></Personal>
            <Personal can_id="1"></Personal>
            <Personal can_id="2"></Personal>


        </div>
    );
}

export default Home;
