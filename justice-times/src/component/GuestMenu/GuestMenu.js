import React from 'react';
import { Button } from '../Button';
import { StyledNavList } from './GuestMenu.styled';

export const GuestMenu = (props) => {
  return(
		<StyledNavList>
			<Button link="/login" isblack={props.isblack}>Log in</Button>
			<Button link="/sign-in" isblack={!props.isblack}>Sign in</Button>
		</StyledNavList>
	)
}