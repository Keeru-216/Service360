// src/ForgotPassword.js
import React, { useState } from 'react';
import './ForgotPassword.css'; 


const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate sending a reset link
    console.log('Sending reset link to:', email);
    setMessage(`Password reset link sent to ${email}`);
  };

  return (
    <div className="forgot-password-container">
      <h1><b>Forgot Password</b></h1>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit} className="forgot-password-form">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-button">Send Reset Link</button>
      </form>
    </div>
  );
};

export default ForgotPassword;
