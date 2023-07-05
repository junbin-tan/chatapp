import React, { useState } from "react";
import "./register.css";
import AddAvatar from "../assets/addAvatar.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";


const Register = () => {


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
    // const displayName = e.target[0].value;
    // const email = e.target[1].value;
    // const password = e.target[2].value;
    // const file = e.target[3].files[0];

    const displayName = document.getElementById('name').value;
    const email = document.getElementById('email').value;;
    const password = document.getElementById('password').value;;
    const file = document.getElementById('file').value;;

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const storageRef =  ref(storage, displayName);
      
      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            console.log(res.user);
            //create user on firestore
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            //create empty user chats on firestore
            await setDoc(doc(db, "userChats", res.user.uid), {});

            // go to home page after operation
            navigate("/");
          } catch (err) {
            console.log(err);
            setErr(true);
          }
        });
      });
    } catch (err) {
      setErr(true);
    }

  };
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">WhatChat</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input id="name" type="text" placeholder="display name" />
          <input id="email" type="email" placeholder="email" />
          <input id="password" type={passwordShown ? "text" : "password"} placeholder="password" />
          <button id="passwordOnly" onClick={togglePassword}>Show Password</button>
          <input style={{ display: "none" }} type="file" id="file" />
          <label id="file "htmlFor="file">
            <img src={AddAvatar} alt="Add Avatar" />
            <span>Add an avatar</span>
          </label>
          <button>Sign Up</button>
          {err && <span>Something went wrong</span>}
        </form>
        <p>Do you have an account? Login</p>
      </div>
    </div>
  );
};

export default Register;
