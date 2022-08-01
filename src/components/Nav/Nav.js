import { Link } from "react-router-dom";
import { StyledNav, StyledLink } from "./Nav.style"
import React from "react";

export default function Nav() {
  return (
    <StyledNav>
        <StyledLink>
        <p style={{color: "yellow", margin: "0"}}><i>Test Navbar</i></p>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/hm">HM</Link>
        <Link to="/handy">Handy</Link>
        <Link to="/moneyfarm">Moneyfarm</Link>
        </StyledLink>
    </StyledNav>
  )
}
