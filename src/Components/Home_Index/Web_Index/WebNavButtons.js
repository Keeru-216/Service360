import React, { useState } from 'react';
import './WebNavButtons.css';
import { useNavigate } from 'react-router-dom';

const WebNavButtons = () => {
    const navigate = useNavigate();

    const handleSubmit = (e, action) => {
        e.preventDefault();
       

        if (action === 'login') {
            // Navigate to the login page
            navigate('/login');
        } else if (action === 'signup') {
            // Navigate to the signup page
            navigate('/register');
        }
    };

    return (
        <>
           
                <div><button 
                    type="submit" 
                    className="login-button" 
                    onClick={(e) => handleSubmit(e, 'login')}
                >
                    Log In
                </button></div>
                <br></br>
                <div><button 
                    type="submit" 
                    className="login-button" 
                    onClick={(e) => handleSubmit(e, 'signup')}
                >
                    Sign Up
                </button></div>
           
        </>
    );
};

export default WebNavButtons;
