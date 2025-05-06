// src/components/Footer.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="ftr">
      <div className="footer-container">
        {/* Brand / Logo */}
        <div className="footer-brand">Metro Accessibility</div>

        {/* Footer nav links */}
        <ul className="footer-nav">
          <li><NavLink to="/"    activeclassname="active">Home</NavLink></li>
          <li><NavLink to="/settings" activeclassname="active">Settings</NavLink></li>
          <li><NavLink to="/about" activeclassname="active">About</NavLink></li>
        </ul>

        {/* Social / Legal */}
        <div className="footer-info">
          <small>&copy; {year} Metro Accessibility. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
}
