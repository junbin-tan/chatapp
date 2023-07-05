import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>WhatChat</span>
      <div className="user">
        <img src="https://images.pexels.com/photos/10752186/pexels-photo-10752186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image"/>
        <span>John</span>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar