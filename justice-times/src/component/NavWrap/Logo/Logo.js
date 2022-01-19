import { LogoLink } from "./Logo.styles";

export const Logo = (props) => {
	return (
		<LogoLink to='/'>
			<img alt="The Justice Times" src={props.logo}/>
		</LogoLink>
	)
}