import Iframe from 'react-iframe';
import React from 'react';
import "../css/pye.css";
import "../font/font.css";

const Pye = (props) => {
  
  return (
    <div className='pyecontainer'>
      <h2 className="pyetitle" style={{fontFamily:"Cafe24Oneprettynight"}}>{props.title}</h2>
      <iframe className="pye" src={props.src}></iframe>
 
    </div>
  );
};

export default Pye;
