import React from "react";

import { Wrapper } from "../Wrapper";
import { NavWrap } from "../NavWrap";
import { CopirightWrap } from "../CopirightWrap";

import { FooterStyles } from "./Footer.styles";
import logo from '../../assets/images/LogoFooter.png'

export const Footer = () => {
	return (
		<FooterStyles>
			<Wrapper>
				<NavWrap isblack={true} logo={logo} padding="72px 0"/>
				<CopirightWrap/>
			</Wrapper>
		</FooterStyles>
	)
}