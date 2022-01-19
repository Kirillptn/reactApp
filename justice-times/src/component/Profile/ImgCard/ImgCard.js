import React, { useContext } from 'react';
import { TrueButton } from '../../TrueButton';

import notPhoto from '../../../assets/images/no-photo.png';
import { DeleteBtn, ImgCardStyled, ProfileImg } from './ImgCard.styled'
import {MyContext} from '../../../App';

export const ImgCard = () => {
	const { currentUser } = useContext(MyContext)

	if (currentUser.img){
		return (
			<ImgCardStyled>
				<ProfileImg src={currentUser.img}/>
				<TrueButton>Change photo</TrueButton>
				<DeleteBtn>Delete photo </DeleteBtn>
			</ImgCardStyled>
		)
	}

	return (
		<ImgCardStyled>
			<ProfileImg src={notPhoto}/>
			<TrueButton>Upload photo</TrueButton>
		</ImgCardStyled>
	)
}