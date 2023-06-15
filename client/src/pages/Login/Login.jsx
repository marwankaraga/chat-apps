import React, { useContext, useRef } from 'react'
import './login.css'
import { loginCall } from "../../appCalls"
import { Authcontext } from '../../context/AuthContext';
import { CircularProgress } from '@mui/material';

export default function Login() {
  const email=useRef();
  const password=useRef();
  const { user,isFetching,dispatch}=useContext(Authcontext);

  const handleClick= (e) =>{
    e.preventDefault();
    loginCall(
      {email:email.current.value,password:password.current.value},
      dispatch
    );
    console.log(user,isFetching,dispatch);
    
  }
    
  
  return (
    <div className='login'>
        <div className='loginWrapper' >
            <div className='loginLeft'>
                <h3 className='loginLogo'>
                    Marwan
                </h3>
                <span className='loginDesc'>
                    Connect With friends and the world around you on Marwansocial
                </span>
            </div>
            <div className='loginRight' >
              
                <form className='loginBox' onSubmit={handleClick} >
                    <input placeholder='Email'
                     type="email" 
                     className='loginInput'
                     ref={email}
                     required />
                      <input type="password" 
                      placeholder='Password'
                       className='loginInput'
                       minLength="6"
                       required
                       ref={password} />
                      <button className='loginButton'>{isFetching ? <CircularProgress/> :"Log in " } </button>
                      <span className='loginForgot'>Forgot Password</span>
                      <button className='loginRegisterButton'>
                        Create a New Account
                      </button>
                </form>
            </div>
        </div>
    </div>
  )
}
