import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import { IoIosSearch } from "react-icons/io";
import { MdPersonOutline, MdOutlineShoppingCart } from "react-icons/md";
import { FiMenu, FiX } from "react-icons/fi";
import Logo from '../../assets/HEADER IMG/logo.svg'
import CartSideBar from '../CARTSIDEBAR/CartSideBar'
import { MdKeyboardArrowDown } from "react-icons/md";
import MenImg from '../../assets/HEADER IMG/MEN-IMG.jpeg'
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram
} from "react-icons/fa";


const Header = () => {

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showMenDropdown, setShowMenDropdown] = useState(false);

  const handleAdd = () => {
  if (!product) return; // prevent crash
  addToCart(product);   // add to cart
};
  

  return (
    <div>
      {/* === Header Top === */}
      <div className="header-content">
        <div className="hamburger-icon" onClick={() => setIsMenuOpen(true)}>
          <FiMenu size={24} style={{color: 'black'}}/>
        </div>

        <div className="search-bar desktop-only">
          <input type="text" name="text" placeholder="Search" />
          <IoIosSearch className="search-icon" />
        </div>

        <div className="logo">
          <Link to="/">
          <img src={Logo} />
          </Link>
        </div>

        <div className="shopping-cart-links ">
          <div className="shopping-link desktop-only">
            <Link to="/SignIn" className='account-link'>Account
            <MdPersonOutline style={{color: 'black'}} />
            </Link>
          </div>
          <div className="shopping-link" onClick={() => setIsCartOpen(true)}>
            <p className="add-to-cart-text" onClick={handleAdd}>Cart </p>
            <MdOutlineShoppingCart className="cart-icon" style={{color: 'black'}}/>
          </div>
        </div>
      </div>

      {/* === Desktop Navbar === */}
      <div className="nav-components desktop-only">
        <div className="nav-items">
          <Link to="/">Home</Link>

          <div className="dropdown">
            <Link to="/Men">Men ▼</Link>
            <div className="hover-box">
              <div className="row-wrapper">
                <div className="img-wrapper">
                  <img src={MenImg} />
                </div>
                <div className="txt-wrapper">
                  <div className="col-1-men col">
                    <a href="#">Tops</a>
                    <a href="#">Polo</a>
                    <a href="#">Shirts</a>
                    <a href="#">Tees</a>
                  </div>
                  <div className="col-2 col">
                    <a href="#">Bottoms</a>
                    <a href="#">Inno-khaki</a>
                    <a href="#">Jogger</a>
                    <a href="#">Shorts</a>
                  </div>
                  <div className="col-3 col">
                    <a href="#">G-motions</a>
                  </div>
                  <div className="col-4 col">
                    <a href="#">Essentials</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Link to="/Women">Women</Link>
          <Link to="/Juniors" >Juniors</Link>
          <Link to="/classic-club" >Classic Club</Link>
          <Link to="/winter" >Winter Collection</Link>
          <Link to="/new-arrival" >New Arrivals</Link>
          <Link to="/clearence">Clearance</Link>
        </div>
      </div>

      {/* === Mobile Sidebar === */}
      <div className={`mobile-sidebar ${isMenuOpen ? "open" : ""}`}>
        <div className="close-icon" onClick={() => setIsMenuOpen(false)}>
          <FiX size={24} />
        </div>

        <div className="search-bar mobile-only">
          <input type="text" placeholder="Search" />
          <IoIosSearch className="search-icon" />
        </div>

        <div className="mobile-nav-items">
          <Link to="/"  className='nav-name' onClick={() => setIsMenuOpen(false)}>Home</Link>

          <div className="mobile-dropdown nav-name">
            <div className="dropdown-header">
  <Link
    to="/Men"
    className="men-link"
    onClick={() => setIsMenuOpen(false)}
  >
    Men
  </Link>
  <span
    className={`arrow ${showMenDropdown ? "up" : "down"}`}
    onClick={(e) => {
      e.stopPropagation(); // prevent click bubbling
      setShowMenDropdown(!showMenDropdown);
    }}
  >
    ▼
  </span>
</div>


            {showMenDropdown && (
              <div className="dropdown-content">
                <a href="#">Tops</a>
                <a href="#">Polo</a>
                <a href="#">Shirts</a>
                <a href="#">Tees</a>
                <a href="#">Bottoms</a>
                <a href="#">Inno-khaki</a>
                <a href="#">Jogger</a>
                <a href="#">Shorts</a>
                <a href="#">G-motions</a>
                <a href="#">Essentials</a>
              </div>
            )}
          </div>

          <Link to="/Women" className='nav-name' onClick={() => setIsMenuOpen(false)}>Women</Link>
          <Link to="/Juniors"  className='nav-name' onClick={() => setIsMenuOpen(false)}>Juniors</Link>
          <Link to="/classic-club"  className='nav-name' onClick={() => setIsMenuOpen(false)}>Classic Club</Link>
          <Link to="/winter"  className='nav-name' onClick={() => setIsMenuOpen(false)}>Winter Collection</Link>
          <Link to="/new-arrival"  className='nav-name' onClick={() => setIsMenuOpen(false)}>New Arrivals</Link>
          <Link to="/clearence" className='nav-name' onClick={() => setIsMenuOpen(false)}>Clearance</Link>
        </div>

        <Link to="/SignIn" style={{ textDecoration: 'none' }}>
          <div className="mobile-shopping-link">
            <MdPersonOutline className="account-icon" />
            <p>LogIn/Create Account</p>
          </div>
        </Link>

        <div className="mobile-social-links">
          <a href="https://www.facebook.com/Giordano.Pk" target='_blank'><FaFacebookF size={18} /></a>
          <a href="https://www.youtube.com/@giordanopakistanofficial939" target='_blank'><FaYoutube size={21} /></a>
          <a href="https://www.instagram.com/giordanopakofficial/" target='_blank'><FaInstagram size={18} /></a>
        </div>

        <div className="mobile-txt">
          <p><strong>Giordano Pakistan</strong></p>
          <p><em>World Without Strangers!</em></p>
        </div>

      </div>

      {isMenuOpen && <div className="overlay" onClick={() => setIsMenuOpen(false)}></div>}

      <CartSideBar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
}
export default Header