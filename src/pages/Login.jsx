import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import './login.css';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {

  const [passwordShown, setPasswordShown] = useState(false);

  // Password toggle handler
  const togglePassword = (e) => {
    e.preventDefault();
    setPasswordShown(!passwordShown);
  };

    // for error
    const [err, setErr] = useState(false);
    // for navigation
    const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      try {
        await signInWithEmailAndPassword(auth, email, password);
        navigate("/")
      } catch (err) {
        setErr(true);
      }
  
    };


  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">WhatChat</span>
        <span className="title">Register</span>
        <form onSubmit={ handleSubmit }>
          <input id="email" type="email" placeholder="email" />
          <input id="password" type={passwordShown ? "text" : "password"} placeholder="password" />
          <button id="passwordOnly" onClick={togglePassword}>Show Password</button>
          <button>Sign In</button>
          {err && <span>Something went wrong</span>}
        </form>
        <p>Don't have an account? <Link to="/register">Register</Link></p>
      </div>
    </div>
  ); 
}

export default Login