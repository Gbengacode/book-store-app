import React, { useState } from 'react';
import { FaRegUserCircle, FaBars } from 'react-icons/fa';
import {
  Header,
  Nav,
  NavContainer,
  NavLogo,
  NavMenu,
  NavItem,
  NavLink,
  NavUser,
  MobileIcon,

} from '../asset/headerStyles';
import Sidebar from './Sidebar';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpenProps={isOpen} toggleProps={toggle} />
      <Header>
        <Nav>
          <NavContainer>
            <NavMenu>
              <NavLogo to="/">BookStore CMS</NavLogo>
              <NavItem>
                <NavLink to="/">
                  Books
                </NavLink>
                <NavLink to="/categories">Categories</NavLink>
              </NavItem>
            </NavMenu>
            <NavUser to="/"><FaRegUserCircle /></NavUser>
            <MobileIcon>
              <FaBars onClick={toggle} />
            </MobileIcon>
          </NavContainer>
        </Nav>
      </Header>
    </>
  );
};

export default Navbar;
