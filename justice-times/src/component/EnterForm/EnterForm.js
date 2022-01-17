import React, { useState } from 'react';

import { Form, Input, InputWrap, Label, Submit } from './EnterForm.styled';

export const EnterForm = ({ submitFunc, tempObj, typeArr, textBtn }) => {
	const [ userLoginData, setUserLoginData ] = useState(tempObj)

	const handleChange = (event) => {
		setUserLoginData(prevUserData => ({
			...prevUserData,
			[event.target.name]: event.target.value,
		}))
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		submitFunc(userLoginData)
	}

	return (
		<Form>
			{
				typeArr.map((input) => (
					<InputWrap key={input.name}>
						<Label>{input.label}</Label>
						<Input
							onChange={handleChange}
							type={input.type}
							name={input.name}
							value={userLoginData[input.name]}
						/>
					</InputWrap>
				))
			}
			<Submit onClick={handleSubmit} type="submit" isblack={true}>{textBtn}</Submit>
		</Form>
	);
}