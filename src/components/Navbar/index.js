import React from 'react'
import {
    Nav,
    NavLink,
    Bars,
    NavMenu
  } from './NavbarElements';

export const Navbar = () => {
    return (
        <div>
            <Nav>
                <NavLink to="/">
                    <h1> Logo </h1>
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to="/about" activeStyle>
                        About
                    </NavLink>
                    <NavLink to="/about" activeStyle>
                        About
                    </NavLink>
                    <NavLink to="/about" activeStyle>
                        About
                    </NavLink>
                </NavMenu>
            </Nav>
        </div>
    )
}

export default Navbar;
