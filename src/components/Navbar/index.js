import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/">
            Home
          </NavLink>
          <NavLink to="/about">
            About
          </NavLink>
          <NavLink to="/pokemon">
            Pokemon Comparisons
          </NavLink>
          <NavLink to="/contact">
            Contact Me
          </NavLink>
          <NavLink to="/teambuilder">
            Team Builder
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;