import React from 'react'

import { Wrapper } from "../Wrapper";
import { NavWrap } from "../NavWrap";

import logo from '../../assets/images/Logo.png'
import { StyledHeader } from "./Header.styles";

export const Header = () => {

	return (
		<StyledHeader>
			<Wrapper>
				<NavWrap logo={logo}/>
			</Wrapper>
		</StyledHeader>
	)
}