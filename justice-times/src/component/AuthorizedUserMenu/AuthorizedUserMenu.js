import React, { useContext } from 'react';
import { Button } from '../Button';

import { NavLinkStyled, NavList } from './AuthorizedUserMenu.styled';
import { linksToPages } from '../../mock';
import { MyContext } from '../../App';

export const AuthorizedUserMenu = ({ isblack }) => {
	const { setCurrentUser } = useContext(MyContext)
	const logoutUser = () => {
		setCurrentUser(null)
		localStorage.removeItem('user')
	}

	return (
		<NavList>
			{
				linksToPages.map((link) => {
					return <NavLinkStyled
						className={({ isActive }) => isActive ? 'selected' : ''}
						isblack={isblack}
						key={link.name}
						to={link.path}>{link.name}
					</NavLinkStyled>
				})
			}
			<Button clickFunc={logoutUser} link="/login" isblack={true}>Logout</Button>
		</NavList>
	)
}