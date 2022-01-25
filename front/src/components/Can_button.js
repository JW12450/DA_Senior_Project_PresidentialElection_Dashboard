import React, {useState} from 'react';
import { Link } from 'react-router-dom';

function Can_Button(props){
    const can_id = Number(props.can_id);

    const CanName =["이재명","윤석열","안철수"]
    const CanUrl =["./lee","./yoon","./ahn"]

    const [Can,setCan] = useState({
        name : CanName[can_id],
        url : CanUrl[can_id]
    });
    
    return (

        <Link to={Can.url}>
        <button type='button'> {Can.name}후보 보러가기</button>
        </Link>
    );
}

export default Can_Button;