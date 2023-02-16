import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
  
export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  background-image:
    linear-gradient(
     rgb(54, 54, 54), rgb(24, 21, 21)
    );
  background-repeat: no-repeat;
  font-size: 30px;
  font-family: 'Macondo', cursive, 'Courier New', Courier, monospace;
`;
  
export const NavLink = styled(Link)`
  color: rgb(150, 35, 35);
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 10px;
  height: 100%;
  cursor: pointer;
  &.active {
    color: red;
  }
`;
  
export const Bars = styled(FaBars)`
  display: flex;
  color: #808080;
  @media screen and (max-width: 768px) {
    display: flex;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
  
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  
  @media (min-width: 406px) and (max-width: 768px) {
    font-size: 17px;
  }

  @media screen and (max-width: 405px) {
    font-size: 12px
  }
`;