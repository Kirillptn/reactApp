import { StyledButton } from "./Button.styles";

export const Button = ({ clickFunc, link, isblack, children }) => {
	return (
		<StyledButton onClick={clickFunc} to={link} isblack={isblack}>
			{children}
		</StyledButton>
	)
}