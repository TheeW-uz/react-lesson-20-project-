import React from 'react'
import './Register.css'
import mainImg from '../../../public/register-img.png'
import mainLogo from '../../../public/log-in.png'
import { FiUser } from "react-icons/fi";
import { FaEyeSlash } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { MdOutlineMail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { SiApple } from "react-icons/si";


const Register = () => {
  return (
    <div>
      <div className="container">
        <div className="register-main">
          <img className='main-logo' src={mainLogo} alt="img" />
          <p className='register-in-title'>Register</p>
          <p className='register-in__desc'>Create New Dreamspos Account</p>

          <div className="register-form">
            <p className='name-text'>Name</p>
            <div className='name'>
              <input className='name-input' type="text" />
              <FiUser className='name-icon' />
            </div>

            <p className='email-text'>Email Adress</p>
            <div className='email'>
              <input className='email-input' type="email" />
              <MdOutlineMail className='email-icon' />
            </div>

            <p className='password-text'>Password</p>
            <div className='password'>
              <input className='password-input' type="password" />
              <FaEyeSlash className='password-icon' />
            </div>

            <p className='password-text'>Confirm Password</p>
            <div className='password'>
              <input className='password-input' type="password" />
              <FaEyeSlash className='password-icon' />
            </div>

            <div className="form-addon">
              <input className='checkbox-input' type="checkbox" />
              <p className='agree'>I agree to the </p>
              <p className='policy'>Terms & Privacy</p>
            </div>

            <button className='register-btn'>Sign Up</button>

          </div>

          <div className="create-acc">
            <p className='create-title'>New to our platform?</p>
            <Link to="/login" className='create'>Sign In Instead</Link>
          </div>

          <p className='or'>OR</p>

          <div className="socials-container">
            <div className="facebook">
              <FaFacebook className='facebook-icon' />
            </div>
            <div className="google">
              <FaGoogle className='google-icon' />
            </div>
            <div className='apple'>
              <SiApple className='apple-icon' />
            </div>
          </div>

          <p className='copyright'>Copyrights © 2025 - DreamsPOS </p>
        </div>
        <div className="register-img">
          <img src={mainImg} alt="img" />
        </div>
      </div>
    </div>
  )
}

export default Register
