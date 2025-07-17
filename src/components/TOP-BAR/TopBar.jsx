import React from 'react'
import './TopBar.css'
import {
    FaFacebookF,
    FaYoutube,
    FaInstagram
}
    from "react-icons/fa";

const TopBar = () => {
    return (
        <div className="top-bar">
            <div className="row">

                <div className="social-links">
                    <a
                        href="https://www.facebook.com/Giordano.Pk"
                        target="_blank"
                        aria-label="Visit Giordano Pakistan on Facebook"
                    >
                        <FaFacebookF size={18} />
                    </a>
                    <a href="https://www.youtube.com/@giordanopakistanofficial939" target='_blank' aria-label="Visit Giordano Pakistan on Facebook"><FaYoutube size={21} /></a>
                    <a href="https://www.instagram.com/giordanopakofficial/" target='_blank' aria-label="Visit Giordano Pakistan on Facebook"><FaInstagram size={18} /></a>
                </div>

                <div className="main-txt">
                    <p>*FREE DELIVERY NATIONWIDE. <span>SHOP NOW!</span></p>
                </div>

            </div>
        </div>
    )
}

export default TopBar