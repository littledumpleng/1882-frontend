import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faYoutube, faFacebookF } from '@fortawesome/free-brands-svg-icons'
import logo from '../images/1882logo.png';

export const Header = (props) => {
  const facebook = <FontAwesomeIcon icon={faFacebookF} size="lg" />
  const instagram = <FontAwesomeIcon icon={faInstagram} size="lg" />
  const youtube = <FontAwesomeIcon icon={faYoutube} size="lg" />
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
            <a href="/home" className="navbar-item">HOME</a>
            <a href="/about" className="navbar-item">ABOUT</a>
            <a href="/suggestion" className="navbar-item">SUGGESTIONS</a>
            <a href="/featured" className="navbar-item">REVIEWS</a>
            <a href="/contact" className="navbar-item">CONTACT</a>
            <a href="https://www.facebook.com/1882ProjectFoundation/" className="navbar-item">{facebook}</a>
            <a href="https://www.instagram.com/1882foundation/?hl=en" className="navbar-item">{instagram}</a>
            <a href="https://www.youtube.com/channel/UC00NyHsuZW5OpklnE-mLwRw" className="navbar-item">{youtube}</a>
            <a href="https://1882foundation.org" className='navbar-item'>
            <button className=" main-btn"><a>MAIN SITE</a></button>
            </a>
          </div>
        </div>
      </nav>
      {/* <div className="navbar-second">.hvjvj</div> */}
    </div>
    )
}