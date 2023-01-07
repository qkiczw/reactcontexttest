import React, { useContext } from "react";

import { ThemeContext } from "../Context/ThemeContext";

const styles = {
  width: "100%",
  height: "100vh",
};

const AppBackground = ({ children }) => {
  const themeStyles = useContext(ThemeContext);
  console.log("???>", themeStyles.colors.appBackground);
  return (
    <div style={{ ...styles, ...themeStyles.colors.appBackground }}>
      {children}
    </div>
  );
};

export default AppBackground;
