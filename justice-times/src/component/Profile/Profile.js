import React from 'react';

import { ImgCard } from './ImgCard';
import { ProfileInfo } from './ProfileInfo';

import {
	ProfileCard,
	ProfileStyled,
	Title,
} from './Profile.styled';

export const Profile = () => {
	return (
		<ProfileStyled>
			<Title>Profile</Title>
			<ProfileCard>
				<ImgCard/>
				<ProfileInfo/>
			</ProfileCard>
		</ProfileStyled>
	)
}