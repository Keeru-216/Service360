// src/ResetPassword.js
import React, { useState } from 'react';
import './ResetPassword.css';
import { useNavigate } from 'react-router-dom';


const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newPassword === confirmPassword) {
      // Simulate password reset logic
      console.log('Password reset to:', newPassword);
      setMessage('Your password has been reset successfully!');
    } else {
      setMessage('Passwords do not match.');
    }
    navigate('/login');
  };

  return (
    <div className="reset-password-container">
      <h1><b>Reset Password</b></h1>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit} className="reset-password-form">
        <div className="form-group">
          <label htmlFor="new-password">New Password</label>
          <input
            type="password"
            id="new-password"
            placeholder="Enter your new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            type="password"
            id="confirm-password"
            placeholder="Confirm your new password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-button">Reset Password</button>
      </form>
    </div>
  );
};

export default ResetPassword;
