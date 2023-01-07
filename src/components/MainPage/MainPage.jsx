import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

import moon from "../../assets/moon.png";

const iconStyles = {
  maxWidth: "100px",
};

const MainPage = ({ ...props }) => {
  const theme = useContext(ThemeContext);
  const { darkMode } = props;

  return (
    <div
      style={{
        ...theme.default,
        ...theme.default.center,
        ...theme.colors.main,
      }}
    >
      <h2>{darkMode ? `Dark Mode ON!` : `Dark Mode OFF!`}</h2>
      <img src={moon} style={iconStyles} alt="" />
    </div>
  );
};

export default MainPage;
