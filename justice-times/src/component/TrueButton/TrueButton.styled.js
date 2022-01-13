import styled from "styled-components";

export const TrueButtonStyled = styled.button`
  display: inline-block;
  cursor: pointer;
  border: 1px solid #242424;
  font-family: 'IBM Plex Sans',serif;
  font-size: 16px;
  padding: 14px 32px;
  color: ${props => props.isblack ? '#FFFFFF' : '#242424'};
  background-color: ${props => props.isblack ? '#242424' : '#FFFFFF'};
`