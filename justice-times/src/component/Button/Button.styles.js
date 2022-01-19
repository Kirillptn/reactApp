import styled from "styled-components";
import {Link} from "react-router-dom";

export const StyledButton = styled(Link)`
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  border: 1px solid;
  font-family: 'IBM Plex Sans',serif;
  font-size: 16px;
  padding: 14px 32px;
  color: ${props => props.isblack ? '#FFFFFF' : '#242424'};
  background-color: ${props => props.isblack ? '#242424' : '#FFFFFF'};
	border-color: ${props => props.isblack ? '#FFFFFF' : '#242424'};
`
