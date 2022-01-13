import styled from "styled-components";
import {TrueButtonStyled} from "../TrueButton/TrueButton.styled";

export const LoginStyled = styled.div`
  color: #242424;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.h1`
  font-family: Playfair Display, sans-serif;
  font-weight: 700;
  font-size: 36px;
  line-height: 56px;
  margin: 0 0 48px;
`
export const Form = styled.form`
  width: 396px;
  display: flex;
  flex-direction: column;
`
export const Label = styled.label`
  font-family: IBM Plex Sans, sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  margin-bottom: 12px;
`
export const Input = styled.input`
  width: 100%;
  height: 47px;
  border: 1px solid #8C8C8C;
  margin-bottom: 48px;
`
export const Submit = styled(TrueButtonStyled)`
  width: 100%;
  padding: 20px 0;
`
export const Help = styled.div`
  font-family: IBM Plex Sans, sans-serif;
  font-weight: 400;
  font-size: 16px;
	line-height: 16px;
`