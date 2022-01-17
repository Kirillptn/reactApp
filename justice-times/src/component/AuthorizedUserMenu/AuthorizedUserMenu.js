import React from 'react';
import { Button } from '../Button';
import { NavLinkStyled, NavList } from './AuthorizedUserMenu.styled';
import { linksToPages } from '../../mock';

export const AuthorizedUserMenu = (props) => {
	const logoutUser = () => {
		props.setCurrentUser(null)
		localStorage.removeItem('user')
	}

	return (
		<NavList>
			{
				linksToPages.map((link) => {
					return <NavLinkStyled isblack={props.isblack} key={link.name} to={link.path}>{link.name}</NavLinkStyled>
				})
			}
			<Button clickFunc={logoutUser} activeClassName="selected" link="/login" isblack={true}>Logout</Button>
		</NavList>
	)
}