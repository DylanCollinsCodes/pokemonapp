import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/pokemon" activeStyle>
            Pokemon Comparisons
          </NavLink>
          <NavLink to="/contact" activeStyle>
            Contact Me
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;