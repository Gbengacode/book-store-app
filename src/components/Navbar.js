import React from 'react';
import { FaRegUserCircle } from 'react-icons/fa';
import {
  Header,
  Nav,
  NavContainer,
  NavLogo,
  NavMenu,
  NavItem,
  NavLink,
  NavUser,

} from '../asset/headerStyles';

const Navbar = () => (
  <Header>
    <Nav>
      <NavContainer>

        <NavMenu>
          <NavLogo to="/">BookStore CMS</NavLogo>
          <NavItem>
            <NavLink to="/">
              Books
            </NavLink>
            <NavLink to="/categories" activeClassName="any">Categories</NavLink>
          </NavItem>
        </NavMenu>
        <NavUser to="/"><FaRegUserCircle /></NavUser>
      </NavContainer>
    </Nav>
  </Header>

);

export default Navbar;
