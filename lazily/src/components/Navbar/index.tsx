// Create navbar in typescript
// Add custom styling to navbar
import React from 'react';
import {Link} from 'react-router-dom';
import About from '../../pages/about';
import Home from '../../pages/home';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
  } from './NavbarElements';
import Button from 'C:/Users/YOLO4/OneDrive/Desktop/Lazily/lazily/src/components/UI/Button';
  const Navbar = () => {
    return (
      <>
        <Nav>
          <Bars />
          <NavMenu>
            <NavLink to='/home'>
              <Button name='Home' onClick={Home}/>
            </NavLink>
            <NavLink to='/about'>
              {/* {Wrap link around custom button I made} */}
              <Button name='About' onClick={About}/>

            </NavLink>
            <NavLink to='/events'>
              <span style={{color: 'rgb(245,251,255)'}}>Events</span>
            </NavLink>
            <NavLink to='/annual'>
              Annual Report
            </NavLink>
            <NavLink to='/team'>
              Teams
            </NavLink>
            <NavLink to='/blogs'>
              Blogs
            </NavLink>
            <NavLink to='/sign-up'>
              Sign Up
            </NavLink>
            {/* Second Nav */}
            {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='/signin'>Sign In</NavBtnLink>
          </NavBtn>
        </Nav>
      </>
    );
  };
export default Navbar;