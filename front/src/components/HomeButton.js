import React from 'react';

function HomeButton(props){
    return (
        <button type='button' onclick="location.href='/'">
            홈으로 돌아가기
        </button>
    );
}

export default HomeButton;