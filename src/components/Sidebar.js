/* eslint-disable react/prop-types */
import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
} from '../asset/SidebarStyles';

const Sidebar = ({ isOpenProps, toggleProps }) => (
  <>
    <SidebarContainer isOpen={isOpenProps} onClick={toggleProps}>
      <Icon>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink to="/">Home</SidebarLink>
        <SidebarLink to="/categories">Categories</SidebarLink>
      </SidebarMenu>
    </SidebarContainer>
  </>
);

export default Sidebar;
