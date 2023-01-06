import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import { ThemeContext } from "../Context/ThemeContext";

const Navigation = () => {
  const theme = useContext(ThemeContext);

  return (
    <nav style={theme.light}>
      <NavLink to="/">Main</NavLink>
      <NavLink to="pageOne">PageOne</NavLink>
      <NavLink to="pageTwo">PageTwo</NavLink>
    </nav>
  );
};

export default Navigation;
