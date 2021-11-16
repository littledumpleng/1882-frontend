import React from 'react';
import logo from '../images/1882logo.png';

export const Header = (props) => {
  return (
    <div className="banner">
      <div className="inner-banner">

        <a href="https://1882foundation.org">
          <img
            src={logo}
            alt="1882 Foundation Logo"
            className="has-ratio"
            width="198"
          />
        </a>

        <a href="/home">
          <span id="title">Literature & Art Corner Database</span>
        </a>
        {/* <a href="https://1882foundation.org" id="goto">Go to Home Site</a> */}
      </div>
      
      <nav className="navbar red">
        <div className="navbar-brand">
          <span className="navbar-burger burger" data-target="navMenu">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navMenu" className="navbar-menu">
          <div className="navbar-end">
            {/* <a href="/home" className="navbar-item">Home</a> */}
            <a href="/about" className="navbar-item">About</a>
            <a href="/suggestion" className="navbar-item">Make a Suggestion</a>
            <a href="/featured" className="navbar-item">Featured Reviews</a>
            <a href="/contact" className="navbar-item">Contact Us</a>
          </div>
        </div>
      </nav>
    </div>
  )
}