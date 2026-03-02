import React from 'react'
import './Forgot.css'
import mainImg from '../../../public/forgot-img.png'
import mainLogo from '../../../public/log-in.png'
import { MdOutlineMail } from "react-icons/md";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


const Forgot = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className='container'>
        <div className="main">
          <img className='main-logo' src={mainLogo} alt="logo" />
          <p className='forgot-title'>Forgot password?</p>
          <p className='forgot__desc'>If you forgot your password, well, then we’ll email you instructions to reset your password.</p>
          <form className='form'>
            <label className='email'>Email Adress</label>
            <div className="email-div">
              <input type="email" className='email-input' />
              <MdOutlineMail className='email-icon' />
            </div>

            <button className='forgot-btn' onClick={() => navigate("/verification")}>Submit</button>

            <div className="return">
              <p className='return-p'>Return to</p>
              <Link to="/login" className="return-link">Login</Link>
            </div>
          </form>

          <p className='copyright'>Copyrights © 2025 - DreamsPOS </p>
        </div>

        <div className="image">
          <img src={mainImg} alt="main" />
        </div>
      </div>
    </div>
  )
}

export default Forgot
