import React from 'react';
import logo from '../images/1882logo.png';


export const Header = (props) => {
    return (
        <div className="banner">
      <div className="inner-banner">
        <img
          src={logo}
          alt="1882 Foundation Logo"
          className="has-ratio"
          width="198"
        />
        <span id="title">Literature & Art Corner Database</span>
        <a href="https://1882foundation.org" id="goto">Go to Home Site</a>
      </div>
<<<<<<< HEAD
<<<<<<< HEAD
      <nav className="navbar red">
=======
=======
>>>>>>> parent of d860474a (working without login)

      <div class="topnav" id="myTopnav">
  <a href="#home" class="active">Home</a>
  <a href="#news">News</a>
  <a href="#contact">Contact</a>
  <a href="#about">About</a>
  <a href="javascript:void(0);" class="icon" onclick="myFunction()">
    <i class="fa fa-bars"></i>
  </a>
</div>
      
      {/* <nav className="navbar red">
<<<<<<< HEAD
>>>>>>> parent of d860474a (working without login)
=======
>>>>>>> parent of d860474a (working without login)
        <div className="navbar-brand">
          <span className="navbar-burger burger" data-target="navMenu">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navMenu" className="navbar-menu">
<<<<<<< HEAD
<<<<<<< HEAD
          <div className="navbar-end">
            <a href="/home" className="navbar-item">Home</a>
            <a href="/about" className="navbar-item">About</a>
=======
          <div className="navbar-end"> */}
            {/* <a href="/home" className="navbar-item">Home</a> */}
            {/* <a href="/about" className="navbar-item">About</a>
>>>>>>> parent of d860474a (working without login)
=======
          <div className="navbar-end"> */}
            {/* <a href="/home" className="navbar-item">Home</a> */}
            {/* <a href="/about" className="navbar-item">About</a>
>>>>>>> parent of d860474a (working without login)
            <a href="/suggestion" className="navbar-item">Make a Suggestion</a>
            <a href="/featured" className="navbar-item">Featured Reviews</a>
            <a href="/contact" className="navbar-item">Contact Us</a>
          </div>
        </div>
      </nav> */}
    </div>
    )
}