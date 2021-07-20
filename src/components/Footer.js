import React from 'react';
import logo from '../images/1882logo.png';

export const Footer = (props) => {
  return (
    <div className="footer">
      <div className="banner">
        <div className="inner-banner">
          <img
            src={logo}
            alt="1882 Foundation Logo"
            className="has-ratio"
            width="198"
          />
          <span id="titles">Literature & Art Corner Database</span>
          <a href="/contact" className="navbar-item">Admin Login</a>
        </div>
      </div>
    </div>
  )
}