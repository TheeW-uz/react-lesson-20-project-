import React from 'react'
import './Header.css'
import headerAvatar from '../../../public/header-avatar.png'
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

    return (
        <div className='header-container'>
            <div className='search-bar'>
                <input type="search" placeholder='search' />
            </div>

            <nav>
                <div className="choose">Freshmart</div>
                <div className="add-new">Add New</div>
                <div className="pos">pos</div>
            </nav>

            <div className="header-addons">
                <div className="header-div-1"></div>
                <div className="header-div-2"></div>
                <div className="header-div-3"></div>
                <div className="header-div-4"></div>
                <div className="header-div-5"></div>
                <div className='header-div-6' onClick={() => navigate("/login")}>
                    <img src={headerAvatar} alt="img" />
                </div>
            </div>
        </div>
    )
}

export default Header
