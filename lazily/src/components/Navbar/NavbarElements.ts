import { FaBars } from 'react-icons/fa';
import { NavLink as LinkR } from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';
import styled from 'styled-components';

// Add shadow on navbar
export const Nav = styled.nav`
  background: transparent;
  height: 50px;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
  // Add shadow on navbar
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
`;
// .main-navigation {
//   box-shadow: 0 2px 2px -2px rgba(0,0,0,.2);
// }
export const NavLink = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  // Adjust margin-left on navbar to fit all screen size
  margin-left: 26px;  
  position: relative;
  height: 100%;
  cursor: pointer;
  &.active {
    border-bottom: 3px solid #01bf71;
  }
`;
  
export const faBars = styled(FaBars)`
  display: none;
  color: #808080;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
  
export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  // Align texts on navbar to left side
  justify-content: flex-start;
  height: 100%;
  z-index: 1;
  @media all and (max-width: 1900px) and (min-width: 800px) {
    margin-left: 800px;
  }
  @media screen and (max-width: 1600px) {
    margin-left: 500px;
  }
  @media screen and (max-width: 768px) {
    // display: none;
    margin-left: 100px;
  }
`;
  
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
  
export const NavBtnLink = styled(LinkR)`
  border-radius: 4px;
  background: #808080;
  padding: 10px 22px;
  color: #000000;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #808080;
  }
`;