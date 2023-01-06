import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

const MainPage = () => {
  const theme = useContext(ThemeContext);
  return (
    <div style={theme.colors.main}>
      <h1>START PAGE!!!</h1>
    </div>
  );
};

export default MainPage;
