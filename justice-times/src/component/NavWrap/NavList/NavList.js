import { GuestMenu } from '../../GuestMenu';
import { AuthorizedUserMenu } from '../../AuthorizedUserMenu';
import { StyledNavList } from './NavList.styles';
import { useContext } from 'react';
import { MyContext } from '../../../App';

export const NavList = (props) => {
	const { currentUser } = useContext(MyContext)

	return (
		<StyledNavList>
			{
				currentUser
					? <AuthorizedUserMenu  {...props}/>
					: <GuestMenu {...props}/>
			}
		</StyledNavList>
	)
}