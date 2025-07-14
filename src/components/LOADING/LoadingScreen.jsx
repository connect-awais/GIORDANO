// src/components/LOADING/LoadingScreen.jsx
import React from 'react';
import './LoadingScreen.css';

const LoadingScreen = () => {
  return (
    <div className="loading-overlay-start">
      <div className="spinner-start"></div>
      <p className="loading-text-start">Loading your experience...</p>
    </div>
  );
};

export default LoadingScreen;
