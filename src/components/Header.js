import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <header className="hdr">
      <h1>Metro Accessibility</h1>
      <nav>
        <NavLink to="/"    className={({isActive})=>isActive?'active':''}>Home</NavLink>
        <NavLink to="/settings" className={({isActive})=>isActive?'active':''}>Settings</NavLink>
        <NavLink to="/about"    className={({isActive})=>isActive?'active':''}>About</NavLink>
      </nav>
    </header>
  );
}
