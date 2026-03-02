import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom';
import logInImg from '../../../public/log-in.png'
import logInLogo from '../../../public/log-in-logo.png'
import { MdOutlineMail } from "react-icons/md";
import { FaEyeSlash } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { SiApple } from "react-icons/si";


const Login = () => {
  return (
    <div>
      <div className="main-container3">
        <div className="login-text">
          <img className='login-logo' src={logInImg} alt="logo" />
          <p className='sign-in-title'>Sign In</p>
          <p className='sign-in__desc'>Access the Dreamspos panel using your email and passcode.</p>

          <div className="login-form">
            <p className='email-text'>Email</p>
            <div className='email'>
              <input className='email-input' type="email" />
              <MdOutlineMail className='email-icon' />
            </div>

            <p className='password-text'>Password</p>
            <div className='password'>
              <input className='password-input' type="password" />
              <FaEyeSlash className='password-icon' />
            </div>

            <div className="form-addon">
              <input className='checkbox-input' type="checkbox" />
              <p className='remember'>Remember Me</p>
              <Link to="/forgot" className='forgot'>Forgot Password?</Link>
            </div>
          </div>

          <button className='sign-in-btn'>Sign In</button>

          <div className="create-acc">
            <p className='create-title'>New to our platform?</p>
            <Link to="/register" className='create'>Create an account</Link>
          </div>

          <p className='or'>OR</p>

          <div className="socials-container">
            <div className="facebook">
              <FaFacebook  className='facebook-icon'/>
            </div>
            <div className="google">
              <FaGoogle  className='google-icon'/>
            </div>
            <div className='apple'>
              <SiApple  className='apple-icon'/>
            </div>
          </div>

        <p className='copyright'>Copyrights © 2025 - DreamsPOS </p>
        </div>

        <div className="login-image">
          <img src={logInLogo} alt="img" />
        </div>
      </div>
    </div>
  )
}

export default Login
