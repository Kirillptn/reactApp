import React from 'react';
import { TrueButtonStyled } from "./TrueButton.styled";

export const TrueButton = (
	{
		children,
		isblack,
		style,
		onClick,
	}) => {
	return (
		<TrueButtonStyled onClick={onClick} style={style} isblack={isblack}>{children}</TrueButtonStyled>
	);
}