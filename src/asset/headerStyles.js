import styled from 'styled-components';
import { NavLink as NavLinka } from 'react-router-dom';

export const Header = styled.header`
display: grid`;

export const Nav = styled.nav`
background: #fff;
border-bottom: 0.5px solid #e8e8e8;

;

`;
export const NavContainer = styled.div`
display: flex;
padding: 20px 40px;
justify-content: space-between;`;

export const NavLogo = styled(NavLinka)`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.875rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #0290ff;
  
`;

export const NavMenu = styled.ul`
display: flex;
justify-content: space-between;
gap: 50px`;

export const NavItem = styled.li`
padding-top: 10px`;

export const NavLink = styled(NavLinka)`
font-family: 'Montserrat', sans-serif;
font-size: 0.813rem;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: 1.9px;
color: #121212;
padding: 20px;
text-transform: uppercase;
&:nth-child(2){
  opacity: 50%;
}

&:hover {
  text-decoration: underline;
  opacity: 100%;

}
`;

export const NavUser = styled(NavLinka)`
font-size: 40px;
color: #0290ff;
}

`;
