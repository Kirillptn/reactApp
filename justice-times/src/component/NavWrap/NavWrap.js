import { Logo } from "./Logo";
import { NavList } from "./NavList";
import React from "react";
import { NavWrapStyles } from "./NavWrap.styles";

export const NavWrap = (props) => {
  return(
      <NavWrapStyles padding = {props.padding}>
          <Logo logo = {props.logo}/>
          <NavList isblack = {props.isblack}/>
      </NavWrapStyles>
)
}