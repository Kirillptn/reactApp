import styled from 'styled-components';
import { TrueButtonStyled } from '../../TrueButton/TrueButton.styled';

export const ImgCardStyled = styled.div`
  display: flex;
	flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 34%;
  margin-right: 40px;
`
export const ProfileImg = styled.img`
	width: 126px;
	height: 126px;
	border-radius: 50%;
  margin-bottom: 32px;
`
export const DeleteBtn = styled(TrueButtonStyled)`
	border: 0;
	padding: 0;
  margin-top: 24px;
  text-decoration: underline;
`
