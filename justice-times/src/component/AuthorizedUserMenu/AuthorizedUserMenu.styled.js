import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavList = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #8C8C8C;
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 15px;
  line-height: 15px;
`
export const NavLinkStyled = styled(NavLink)`
	color: inherit;
  text-decoration: none;
  margin-right: 40px;
  transition: all ease-in .1s;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    padding-bottom: 8px;
    color: ${props => props.isblack ? '#fff' : '#242424'};
    border-bottom: 1px solid ${props => props.isblack ? '#fff' : '#242424'};
  }
`