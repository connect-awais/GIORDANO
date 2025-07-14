// src/components/LOADING/LoadingScreen.jsx
import React from 'react';
import './LoadingScreen.css';

const LoadingScreen = () => {
  return (
    <div className="loading-overlay">
      <div className="spinner"></div>
      <p className="loading-text">Loading your experience...</p>
    </div>
  );
};

export default LoadingScreen;
