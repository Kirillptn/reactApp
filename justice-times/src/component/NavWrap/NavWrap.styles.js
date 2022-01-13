import styled from "styled-components";

export const NavWrapStyles = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${(props) => props.padding || '0'};
`