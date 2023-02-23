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
  justify-content: center;
  gap: 2%;
  flex-grow: 1;
  
  @media (min-width: 561px) and (max-width: 990px) {
    font-size: 20px;
  }

  
  @media (min-width: 340px) and (max-width: 560px) {
    font-size: 12px
  }

  @media screen and (max-width: 339px) {
    font-size: 11px
  }
`;