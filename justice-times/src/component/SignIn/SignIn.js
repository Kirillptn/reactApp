import React, { useContext } from 'react';
import { useNavigate } from "react-router-dom";

import { EnterForm } from '../EnterForm';

import { Title } from '../EnterForm/EnterForm.styled';
import { inputsSignIn, tempSignIn } from '../../mock';
import { SignInStyled } from './SignIn.styled';
import { MyContext } from '../../App';

export const SignIn = () => {
	const navigate = useNavigate()
	const { currentUser } = useContext(MyContext)

	const signInHandler = (Data) => {
		const key = 'usersLoginData'
		const presentValue = JSON.parse(localStorage.getItem(key))
		const rawData = Data;

		rawData.id = Date.now();
		rawData.desc = '';
		rawData.img = null;
		console.log(rawData)

		if (presentValue !== null) {
			if (!presentValue.find(user => user.email === rawData.email)) {
				presentValue.push(rawData)
				localStorage.setItem(key, JSON.stringify(presentValue))
				navigate('/login')
			} else {
				alert('Пользователь с таким e-mail уже существует')
			}
		} else {
			localStorage.setItem(key, JSON.stringify([ rawData ]))
			navigate('/login')
		}
	}

	if (currentUser) {
		navigate('/')
	}

	return (
		<SignInStyled>
			<Title>Create your free account</Title>
			<EnterForm submitFunc={signInHandler} tempObj={tempSignIn} textBtn="Create Account" inputsArr={inputsSignIn}/>
		</SignInStyled>
	)
}

