import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from '../../components/Navbar';
import Input from '../../components/Input';
import './Signup.css'
import Human from '../../assets/human.png'
import illustration1 from '../../assets/illustration1.png'
import illustration2 from '../../assets/illustration2.png'





const Signup= ()=>{

  return(
    <div className="signupparent">

    <Navbar/>

    <div className="signupdesign1">
    <img src={illustration1}/>
    </div>

    <div className="signupdesign2">>
    <img src={illustration2}/>
    </div>


    <div className="signupwrapper">
    <div className="signupillustration">
    <img src={Human} className="signupimage"/>
    </div>

    <div className="signupcontent">
    <form className="signform">
    <Input/>
    </form>
    </div>

    </div>
    </div>)
};

export default Signup;
