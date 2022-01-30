import React from "react";
import {Nav, NavbarContainer, NavLogo, NavIcon, NavMenu, NavLinks, NavItem} from './NavbarStyles.js'
import { useLocation, useHistory } from "react-router-dom";


let history = useHistory();
let location = useLocation();

const Navbar = () => {
    return (
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>
                    <NavIcon src='./src/Logo.jpg' alt='logo'>
                        Logo
                    </NavIcon>
                </NavLogo>
            </NavbarContainer>

        </Nav>>
    ):
};

export default Navbar;