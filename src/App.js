// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './Components/Home_Index/Navigation/NavBar';
import LoginPage from './Components/Login_Register/LoginPage/LoginPage';
import RegisterPage from './Components/Login_Register/Registration/RegistrationPage';
import ResetPassword from './Components/Login_Register/ResetPswd/ResetPassword';
import ForgotPassword from './Components/Login_Register/ForgotPassword/ForgotPassword';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Footer from './Components/Home_Index/Footer/Footer';
import WebIndex from './Components/Home_Index/Web_Index/WebIndex';

const App = () => {
  return (
    <Router>
      <div className="main-content">
        <WebIndex /> 
        <main className="container mt-4"> 
          <Routes>
            <Route path="/" element={<WebIndex />} /> 
            <Route path="/home" element={<NavigationBar />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
          </Routes>
        </main>
        <Footer /> 
      </div>
    </Router>
  );
};

export default App;
