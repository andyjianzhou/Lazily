// Create navbar in typescript
// Add custom styling to navbar
import React from 'react';
import {Link} from 'react-router-dom';
import About from '../About/about';
import Home from '../Home/home';
import {
    Nav,
    NavLink,
    faBars,
    NavbarContainer,
    NavBtn,
    NavBtnLink,
  } from './NavbarElements';
import Button from 'C:/Users/YOLO4/OneDrive/Desktop/Lazily/lazily/src/components/UI/Button';
  const Navbar = () => {
    return (
      <>
        <Nav>
          <NavbarContainer>
            <NavLink to='/home'>
              <Button name='Home' onClick={Home}/>
            </NavLink>
            <NavLink to='/about'>
              {/* {Wrap link around custom button I made} */}
              <Button name='About' onClick={About}/>

            </NavLink>
            <NavLink to='/events'>
              {/* <span style={{color: 'rgb(245,251,255)'}}>Events</span> */}
              <Button name='Events' onClick={About}/>
            </NavLink>
            <NavLink to='/team'>
              <Button name='Team' onClick={About}/>
            </NavLink>
            <NavLink to='/blogs'>
              <Button name='Contact' onClick={About}/>
            </NavLink>
            {/* <NavLink to='/sign-up'>
              Sign Up
            </NavLink> */}
            {/* Second Nav */}
            {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
          </NavbarContainer>
          {/* <NavBtn>
            <NavBtnLink to='/signin'>Sign In</NavBtnLink>
          </NavBtn> */}
        </Nav>
      </>
    );
  };
export default Navbar;