import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import { ThemeContext } from "../Context/ThemeContext";

const Navigation = () => {
  const theme = useContext(ThemeContext);

  return (
    <nav style={theme.colors}>
      <NavLink style={theme.colors.navigation} to="/">
        Main
      </NavLink>
      <NavLink style={theme.colors.navigation} to="pageOne">
        PageOne
      </NavLink>
      <NavLink style={theme.colors.navigation} to="pageTwo">
        PageTwo
      </NavLink>
    </nav>
  );
};

export default Navigation;
