import React from 'react'
import mainLogo from '../../../public/log-in.png'
import mainImg from '../../../public/verification.png'
import { useNavigate } from "react-router-dom";
import './Verification.css'
import { FaRegClock } from "react-icons/fa6";


const Verification = () => {
    const navigate = useNavigate();

    return (
        <div>
            <div className="main-container">
                <div className="verification-main">
                    <img className='main-logo' src={mainLogo} alt="img" />
                    <p className='email-verificate-title'>Email OTP Verification</p>
                    <p className='email-verificate__desc'>OTP sent to your Email Address ending ******doe@example.com</p>

                    <div className="code-box">
                        <input className='code-1' type="text" maxLength={1} onInput={(e) => {
                            e.target.value = e.target.value.replace(/[^0-9]/g, "");
                        }} />
                        <input className='code-2' type="text" maxLength={1} onInput={(e) => {
                            e.target.value = e.target.value.replace(/[^0-9]/g, "");
                        }} />
                        <input className='code-3' type="text" maxLength={1} onInput={(e) => {
                            e.target.value = e.target.value.replace(/[^0-9]/g, "");
                        }} />
                        <input className='code-4' type="text" maxLength={1} />
                    </div>

                    <div className="timer">
                        <FaRegClock className='timer-icon' />
                        <p className='timer-time'>09:59 s</p>
                    </div>

                    <div className="resend-div">
                        <p className='resend-p'>Return to</p>
                        <p className="resend">Login</p>
                    </div>

                    <button className='verify-btn' onClick={() => navigate("/reset")}>Verify & Proceed</button>

                    <p className='copyright'>Copyrights © 2025 - DreamsPOS </p>
                </div>

                <div className="verification-img">
                    <img src={mainImg} alt="img" />
                </div>
            </div>
        </div>
    )
}

export default Verification
