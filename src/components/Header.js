import React from 'react';
import './Header.css'; // Optional, if you have a separate CSS file

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src="/logo.png" alt="Safari Jeep Logo" className="logo" />
      </div>
      <nav className="nav">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/jeeps">Jeeps</a></li>
          <li><a href="/signin">Sign In</a></li>
          <li><a href="/signup">Sign Up</a></li>
          <li><a href="/Admin">Admin</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
