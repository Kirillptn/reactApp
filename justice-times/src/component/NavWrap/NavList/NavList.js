import { StyledNavList } from "./NavList.styles";
import { Button } from "../../Button";

export const NavList = (props) => {
	return (
		<StyledNavList>
			<Button link="/login" isblack={props.isblack}>Log in</Button>
			<Button link="/sign-in" isblack={!props.isblack}>Sign in</Button>
		</StyledNavList>
	)
}