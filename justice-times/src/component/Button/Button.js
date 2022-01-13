import { StyledButton } from "./Button.styles";

export const Button = ({ link, isblack, children }) => {
  return(
      <StyledButton to={link} isblack={isblack}>{children}</StyledButton>
  )
}