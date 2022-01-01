import React from 'react';
import ReactDOM from 'react-dom';
import Icon from "../assets/Icon.png";
import "./Navbar.css";




const Navbar= (props)=>{

  return(
    <>
    <nav className="navbar">
    <img src={Icon}/>
    </nav>
    </>)
};

export default Navbar;
