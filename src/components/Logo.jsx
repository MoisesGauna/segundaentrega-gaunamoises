import React from 'react';
import img1 from "../assets/img/Logo.png";
import './Logo.css';

const Logo = () => {
    return (
        <div className="logo">
            <img src={img1} alt="" />
        </div>
    )
}

export default Logo;