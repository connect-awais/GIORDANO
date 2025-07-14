import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import { IoIosSearch } from "react-icons/io";
import { MdPersonOutline, MdOutlineShoppingCart } from "react-icons/md";
import { FiMenu, FiX } from "react-icons/fi";
import Logo from '../../assets/HEADER-IMG/logo.svg'
import CartSideBar from '../CARTSIDEBAR/CartSideBar'
import { MdKeyboardArrowDown } from "react-icons/md";
import MenImg from '../../assets/HEADER-IMG/MEN-IMG.jpeg'
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

  const [isOpenDrop, setIsOpenDrop] = useState(false);

  const handleLinkClick = () => {
    setIsOpenDrop(false); // Close dropdown on link click
  };

  //for login
   const [userFirstName, setUserFirstName] = useState('');

  useEffect(() => {
    const email = localStorage.getItem('loggedInUser');

    if (email) {
      const name = email.split('@')[0];            // e.g., "john.doe"
      const first = name.split(/[._]/)[0];          // splits at . or _
      const capitalized = first.charAt(0).toUpperCase() + first.slice(1);
      setUserFirstName(capitalized);
    }
  }, []);

  return (
    <div>
      {/* === Header Top === */}
      <div className="header-content">
        <div className="hamburger-icon" onClick={() => setIsMenuOpen(true)}>
          <FiMenu size={24} style={{ color: 'black' }} />
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
      {userFirstName ? (
        <span className="account-link user-name">👋 {userFirstName}</span>
      ) : (
        <Link to="/SignIn" className="account-link">
          Account <MdPersonOutline />
        </Link>
      )}
    </div>
          <div className="shopping-link" onClick={() => setIsCartOpen(true)}>
            <p className="add-to-cart-text" onClick={handleAdd}>Cart </p>
            <MdOutlineShoppingCart className="cart-icon" />
          </div>
        </div>
      </div>

      {/* === Desktop Navbar === */}
      <div className="nav-components desktop-only">
        <div className="nav-items">
          <Link to="/">Home</Link>

          <div className="dropdown" 
           onMouseEnter={() => setIsOpenDrop(true)}
      onMouseLeave={() => setIsOpenDrop(false)}
    >
            <Link to="/Men" onClick={() => setIsOpenDrop(!isOpenDrop)}>Men ▼</Link>
                {isOpenDrop && (
            <div className="hover-box">
              <div className="row-wrapper">
                <div className="img-wrapper">
                  <img src={MenImg} />
                </div>
                <div className="txt-wrapper">
                  <div className="col-1-men col">
                    <Link to="/Men" onClick={handleLinkClick}>Tops</Link>
                    <Link to="/Men" onClick={handleLinkClick}>Polo</Link>
                    <Link to="/Men" onClick={handleLinkClick}>Shirts</Link>
                    <Link to="/Men" onClick={handleLinkClick}>Tees</Link>
                  </div>
                  <div className="col-2 col">
                    <Link to="/Men" onClick={handleLinkClick}>Bottoms</Link>
                    <Link to="/Men" onClick={handleLinkClick}>Inno-khaki</Link>
                    <Link to="/Men" onClick={handleLinkClick}>Jogger</Link>
                    <Link to="/Men" onClick={handleLinkClick}>Shorts</Link>
                  </div>
                  <div className="col-3 col">
                    <Link to="/Men" onClick={handleLinkClick}>G-motions</Link>
                  </div>
                  <div className="col-4 col">
                    <Link to="/Men" onClick={handleLinkClick}>Essentials</Link>
                  </div>
                </div>
              </div>
            </div>
            )}
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
          <Link to="/" className='nav-name' onClick={() => setIsMenuOpen(false)}>Home</Link>

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
              <div className="dropdown-content" onClick={() => setIsMenuOpen(false)}>
                <Link to="/Men" >Tops</Link>
                <Link to="/Men" >Polo</Link>
                <Link to="/Men" >Shirts</Link>
                <Link to="/Men" >Tees</Link>
                <Link to="/Men" >Bottoms</Link>
                <Link to="/Men" >Inno-khaki</Link>
                <Link to="/Men" >Jogger</Link>
                <Link to="/Men" >Shorts</Link>
                <Link to="/Men">G-motions</Link>
                <Link to="/Men" >Essentials</Link>
              </div>
            )}
          </div>

          <Link to="/Women" className='nav-name' onClick={() => setIsMenuOpen(false)}>Women</Link>
          <Link to="/Juniors" className='nav-name' onClick={() => setIsMenuOpen(false)}>Juniors</Link>
          <Link to="/classic-club" className='nav-name' onClick={() => setIsMenuOpen(false)}>Classic Club</Link>
          <Link to="/winter" className='nav-name' onClick={() => setIsMenuOpen(false)}>Winter Collection</Link>
          <Link to="/new-arrival" className='nav-name' onClick={() => setIsMenuOpen(false)}>New Arrivals</Link>
          <Link to="/clearence" className='nav-name' onClick={() => setIsMenuOpen(false)}>Clearance</Link>
        </div>

        <Link to="/SignIn" style={{ textDecoration: 'none' }}>
      <div className="mobile-shopping-link">
        <MdPersonOutline className="account-icon" />
        {userFirstName ? (
          <p>👋 {userFirstName}</p>
        ) : (
          <p>LogIn/Create Account</p>
        )}
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