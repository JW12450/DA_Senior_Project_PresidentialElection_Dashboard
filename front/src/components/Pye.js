import Iframe from 'react-iframe';
import React from 'react';
import "../css/pye.css"
//import A from "../pyechart/a.html";
//import Page from "../pyechart/Pye1.html";

const Pye = (props) => {
  return (
    <div style={{marginLeft:"10vw"}}>
      <h2 style={{color:"white"}}>{props.title}</h2>
      <iframe className="pye" src={props.src}></iframe>
 
    </div>
  );
};

export default Pye;
