import React, { useContext } from 'react';
import { AuthorCardStyled, Description, Name } from './AuthorCard.styled';
import { ProfileImg } from '../../Profile/ImgCard/ImgCard.styled';

import NoPhoto from '../../../assets/images/no-photo.png'
import { MyContext } from '../../../App';

export const AuthorCard = () => {
	const { currentUser } = useContext(MyContext)

// ???? стиль из другого компонента
	return (
		<AuthorCardStyled>
			<ProfileImg src={NoPhoto}/>
			<Name>{currentUser.firstName + ' ' + currentUser.lastName}</Name>
			<Description>{currentUser.desc ? currentUser.desc : 'It is you' }</Description>
		</AuthorCardStyled>
	)
}