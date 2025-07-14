import React, { useState, useEffect } from 'react';
import './Account.css';
import Logo from '../../assets/HEADER-IMG/logo.svg';
import { Link } from 'react-router-dom';

const Account = () => {
  const [email, setEmail] = useState('');
  const [loggedInEmail, setLoggedInEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    const storedEmail = localStorage.getItem('loggedInUser');
    if (storedEmail) {
      setLoggedInEmail(storedEmail);
      setShowSuccess(true);
    }
  }, []);

  useEffect(() => {
    if (showSuccess && loggedInEmail) {
      const text = `Welcome, ${loggedInEmail}!`;
      let i = 0;
      const interval = setInterval(() => {
        setTypedText(text.slice(0, i + 1));
        i++;
        if (i === text.length) clearInterval(interval);
      }, 80);
      return () => clearInterval(interval);
    }
  }, [showSuccess, loggedInEmail]);

  const handleLogin = () => {
    if (!email.includes('@')) {
      alert('Please enter a valid email address.');
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      localStorage.setItem('loggedInUser', email);
      setLoggedInEmail(email);
      setShowSuccess(true);
      setIsLoading(false);
    }, 2000); // Simulate loading
  };

  return (
    <div className="signin-container">
      <Link to="/">
        <img src={Logo} alt="Logo" style={{ height: 'auto', width: '200px' }} />
      </Link>

      {showSuccess ? (
        <div className="success-screen">
          <div className="checkmark-circle">
            <div className="checkmark"></div>
          </div>
          <h2 className="type-text">{typedText}</h2>

          {typedText === `Welcome, ${loggedInEmail}!` && (
            <Link to="/">
              <button className="home-btn">
                Go to Home
              </button>
            </Link>
          )}
        </div>
      ) : (
        <div className="signin-form fade-in">
          <h2>Sign in</h2>
          <p>Enter your email and we'll send you a verification code</p>

          <div className="input-field">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={handleLogin}>
              {isLoading ? <div className="mini-loader"></div> : 'Continue'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Account;
