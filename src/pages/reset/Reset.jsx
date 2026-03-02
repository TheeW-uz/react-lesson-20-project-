import React from 'react'
import './Reset.css'
import mainImg from '../../../public/reset.png'
import mainLogo from '../../../public/log-in.png'
import { FaEyeSlash } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const Reset = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="container">
        <div className="reset-main">
          <img className='main-logo' src={mainLogo} alt="img" />
          <p className='reset-title'>Reset Password?</p>
          <p className='reset__desc'>Enter New Password & Confirm Password to get inside</p>

          <div className="reset-form">

            <p className='password-text'>New Password</p>
            <div className='password'>
              <input className='password-input' type="password" />
              <FaEyeSlash className='password-icon' />
            </div>

            <p className='password-text'>Confirm Password</p>
            <div className='password'>
              <input className='password-input' type="password" />
              <FaEyeSlash className='password-icon' />
            </div>

            <button className='reset-btn' onClick={() => navigate("/success")}>Change Password</button>

          </div>

          <div className="create-acc">
            <p className='create-title'>Return to</p>
            <Link to="/login" className='create'>Login</Link>
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

export default Reset