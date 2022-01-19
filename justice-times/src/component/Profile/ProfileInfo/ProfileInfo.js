import React, { useContext, useState } from 'react';

import { TrueButton } from '../../TrueButton';

import {
	Input,
	InputWrap,
	Label,
	NamesWrap,
	ProfileInfoStyled,
	TextArea,
} from './ProfileInfo.styled';
import { MyContext } from '../../../App';

export const ProfileInfo = () => {
	const { currentUser, setCurrentUser } = useContext(MyContext)
	const [ userData, setUserData ] = useState(currentUser)

	const handleChange = (event) => {
		setUserData(prevUserData => ({
			...prevUserData,
			[event.target.name]: event.target.value,
		}))
	}

	const changeUserData = () => {
		setCurrentUser(userData)
		localStorage.setItem('user', JSON.stringify(userData))
		console.log(currentUser)
	}

	return (
		<ProfileInfoStyled>
			<NamesWrap>
				<InputWrap>
					<Label>First name</Label>
					<Input
						name="firstName"
						onChange={handleChange}
						placeholder={userData.firstName}
						value={userData.firstName}
					/>
				</InputWrap>
				<InputWrap>
					<Label>Last name</Label>
					<Input
						onChange={handleChange}
						name="lastName"
						placeholder={userData.lastName}
						value={userData.lastName}
					/>
				</InputWrap>
			</NamesWrap>
			<Label>Description</Label>
			<TextArea
				onChange={handleChange}
				name="desc"
				rows={10}
				placeholder="Description"
				value={userData.desc}
			/>
			<TrueButton onClick={changeUserData} style={{ alignSelf: 'flex-start' }} isblack={true}>Save Changes</TrueButton>
		</ProfileInfoStyled>
	)
}