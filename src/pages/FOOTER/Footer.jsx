import React from 'react'
import './Footer.css'

import {
  FaFacebookF,
  FaYoutube,
  FaInstagram
} from "react-icons/fa";

const Footer = () => {
  return (
    <div>
        <div className="footer-wrapper">

            <div className="link-section">
            <div className="foot-links">
                <h4>QUICK LINKS</h4>
                <a href="#">Search</a>
                <a href="#">About Us</a>
                <a href="#">Contact Us</a>
                <a href="#">Store Locator</a>
                <a href="#">News</a>
                <a href="#">Privacy Policy</a>
                <a href="#">FAQ's</a>
            </div>
                        <div className="foot-links">
                <h4>Customer Care</h4>
                <a href="#">My Account</a>
                <a href="#">Track Your Order</a>
                <a href="#">Terms & Service</a>
                <a href="#">Shipping Policy</a>
                <a href="#">Exchange Policy</a>
                <a href="#">Size Chart</a>
                <a href="#">Care Guide</a>
            </div>
                        <div className="foot-links contact-foot">
                <h4>CONTACT US</h4>
                <p><strong>Address:</strong> 17th Floor, The Harbour Front, Dolmen City, Block 4 <br /> Clifton, Karachi</p>
                <p><strong>Email:</strong> customercare@giordanopk.com</p>
                <p><strong>Phone:</strong> +92-300-0646888</p>
            </div>
            </div>

            <div className="after-border">
            <div className="foot-social-links">
                    <a href="https://www.facebook.com/Giordano.Pk" target='_blank' aria-label="Visit Giordano Pakistan on Facebook"><FaFacebookF size={18}/></a>
                    <a href="https://www.youtube.com/@giordanopakistanofficial939" target='_blank' aria-label="Visit Giordano Pakistan on Facebook"><FaYoutube size={21}/></a>
                    <a href="https://www.instagram.com/giordanopakofficial/" target='_blank' aria-label="Visit Giordano Pakistan on Facebook"><FaInstagram size={18}/></a>
                </div>

                <div className="copyright-txt">
                    <p>© 2025 Giordano Pakistan • Retail Avenue Pvt Ltd</p>
                </div>
                </div>
        </div>
    </div>
  )
}

export default Footer