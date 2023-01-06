import React from "react";
import { NavLink, redirect } from "react-router-dom";


const navStyles = {
    backgroundColor: "orange",
    width: "100%",
    display: "flex",
    gap: "25px",
    textDecoration: "none",
    padding: "25px 10px",
}

const Navigation = () => {
    return (
        <nav style={navStyles}>
          <NavLink to="/">Main</NavLink>
          <NavLink to="pageOne">PageOne</NavLink>
          <NavLink to="pageTwo">PageTwo</NavLink>
        </nav>
    )

}

export default Navigation;