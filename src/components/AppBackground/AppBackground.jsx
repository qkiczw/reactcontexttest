import React, { useContext } from "react";

import { ThemeContext } from "../Context/ThemeContext";

const styles = {
  width: "100%",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const AppBackground = ({ children }) => {
  const themeStyles = useContext(ThemeContext);
  return (
    <div style={{ ...styles, ...themeStyles.colors.appBackground }}>
      {children}
    </div>
  );
};

export default AppBackground;
