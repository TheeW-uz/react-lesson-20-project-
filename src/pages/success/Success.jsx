import React from 'react'
import './Success.css'
import mainImg from '../../../public/log-in.png'
import mainLogo from '../../../public/reset.png'
import checked from '../../../public/checked.png'
import { useNavigate } from "react-router-dom";

const Success = () => {
    const navigate = useNavigate();

    return (
        <div>
            <div className="container">
                <div className="main">
                    <img className='main-logo' src={mainImg} alt="logo" />

                    <img className='checked' src={checked} alt="img" />
                    <p className='success-title'>Success</p>
                    <p className='success__desc'>Your new password has been successfully saved</p>
                    <button className='success-btn' onClick={() => navigate("/login")}>Back to Sign In</button>
                </div>

                <div className="image">

                </div>
            </div>
        </div>
    )
}

export default Success
