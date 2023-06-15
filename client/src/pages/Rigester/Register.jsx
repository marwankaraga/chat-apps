import axios from 'axios';
import React, { useRef } from 'react'
import {useNavigate} from "react-router-dom"

 import './rigester.css'

export default function Register() {
    const username= useRef();
    const email = useRef();
    const passwordAgain = useRef();
    const password = useRef();
    const history = useNavigate();

     const handleClick= async(e) =>{
        e.preventDefault();
        if(password.current.value!==passwordAgain.current.value){
            password.current.setCustomValidity("passwords dont match");
        }else{
            const user ={
                username:username.current.value,
                email:email.current.value,
                password:password.current.value

            };
            try{
             await axios.post("/auth/register",user);
             history('/login');
            }
            catch(err){

                console.log(err);
            }   
        }
    }

  return (
    <div className='Logins'>
        <div className='loginLefts'>
            <h3 className='loginLogos'>
                Marwan
            </h3>
            <span className='loginDescs'>
                Connect with friendss and the world arround you on Marwan 
            </span>
        </div>

        <div className='loginRights' >
            <form className='loginBoxs' onSubmit={handleClick}>
                <input placeholder='Username' className='loginInputs' ref={username}/>
                  <input placeholder="Email" type="email" required className="loginInputs" ref={email} />
                  <input placeholder="Password" className="loginInputs" ref={password} />
                  <input placeholder="Password Again" className="loginInputs" ref={passwordAgain}/>
                  <button className="loginButton">Sign Up</button>
                  <button className="loginRegisterButton">
                      Log into Account
                  </button>
            </form>
        </div>

    </div>
  )
}
