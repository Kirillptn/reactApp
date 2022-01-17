import React, { useContext } from "react";
import { useNavigate } from 'react-router-dom';

import { EnterForm } from '../EnterForm';

import { Help, HelpLink, LoginStyled } from "./Login.styled";
import { Title } from '../EnterForm/EnterForm.styled';
import { inputsLogin, tempLogin } from '../../mock';
import { MyContext } from '../../App';

export const Login = () => {
	const navigate = useNavigate()
	const { setCurrentUser, currentUser } = useContext(MyContext)

	const loginUser = (Data) => {
		const key = 'usersLoginData'
		const currentUserData = Data;
		const userDataArr = JSON.parse(localStorage.getItem(key));
		const userIsFind = userDataArr.find(user => user.email === currentUserData.email && user.password === currentUserData.password && user.password !== '');
		if (userIsFind) {
			localStorage.setItem('user', JSON.stringify(userIsFind))
			setCurrentUser(userIsFind)
			navigate('/')
		} else localStorage.removeItem('user')
	}
	if (currentUser) {
		navigate('/')
	}

	return (
		<LoginStyled>
			<Title>Log in to your account</Title>
			<EnterForm
				submitFunc={loginUser}
				tempObj={tempLogin}
				textBtn="Log in"
				typeArr={inputsLogin}
			/>
			<Help>
				Don’t have a Times account?
				<HelpLink to="/sign-in">Create one</HelpLink>
			</Help>
		</LoginStyled>
	)
}
