import styled from "styled-components";
import { Link } from 'react-router-dom';

export const LoginStyled = styled.div`
  color: #242424;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Help = styled.div`
  font-family: IBM Plex Sans, sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  margin-top: 24px;
`
export const HelpLink = styled(Link)`
  cursor: pointer;
  font-family: IBM Plex Sans, sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  text-decoration: underline;
	&:visited{
		color: inherit;
	}
`