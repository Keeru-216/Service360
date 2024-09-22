import React, { useState } from 'react';
import './LoginPage.css';
import { useNavigate, Link } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
    navigate('/home'); // Redirect after successful login
  };

  return (
    <div className="login-container">
      <h1><b>Login</b></h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email or Username</label>
          <input
            type="text"
            id="email"
            placeholder="Enter your email or username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-button">Log In</button>
        <div style={{ textAlign: 'center', marginTop: '15px', fontSize: '0.9em' }}>
          <Link to="/register">Don't have an account? Register</Link>
          <br />
          <Link to="/forgot-password">Forgot your password?</Link>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
