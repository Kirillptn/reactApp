import React from "react";
import { Form, Input, Label, LoginStyled, Submit, Title } from "./Login.styled";

export const Login = () => {
  return (
      <LoginStyled>
          <Title>Log in to your account</Title>
          <Form>
              <Label>Email Address</Label>
              <Input/>
              <Label>Password</Label>
              <Input/>
              <Submit isblack = {true}>Log In</Submit>

          </Form>
      </LoginStyled>
  )


}