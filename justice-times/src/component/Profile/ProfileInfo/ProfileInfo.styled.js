import styled from 'styled-components';

export const ProfileInfoStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 62%;
`
export const NamesWrap = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 32px;
`
export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 32px;

  &:last-child {
    margin-right: 0;
  }
`
export const Label = styled.span`
  font-size: 14px;
  line-height: 14px;
  margin-bottom: 12px;
`
export const Input = styled.input`
  border: 1px solid #8C8C8C;
  border-radius: 5px;
  padding: 6px 0 6px 16px;
  font-size: 16px;
  line-height: 16px;
`
export const TextArea = styled.textarea`
  width: 100%;
  resize: none;
  padding: 16px;
  border-radius: 5px;
  margin-bottom: 48px;
`