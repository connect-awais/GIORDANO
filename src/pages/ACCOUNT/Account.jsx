import React from 'react'
import './Account.css'
import Logo from '../../assets/HEADER-IMG/logo.svg'
import { Link } from 'react-router-dom'

const Account = () => {
  return (
    <div className="signin-container">
      <Link to="/">
        <img src={Logo} style={{height: 'auto', width: '200px'}}/>
        </Link>
        <div className="signin-form">
            <h2>Sign in</h2>
            <p>Enter your email and we'll send you a verification code</p>
            <div className="input-field">
            <input type="email" name='email' placeholder='Email' />
            <button>Continue</button>
            </div>
        </div>
    </div>
  )
}

export default Account