import React, { useContext } from "react";

import { ThemeContext } from "../Context/ThemeContext";

const footerStyles = {
  width: "100%",
  display: "flex",
  alignItems: "Center",
  justifyContent: "Center",
  gap: "50px",
  padding: "25px",
};

const Footer = () => {
  const theme = useContext(ThemeContext);
  return (
    <footer style={{ ...footerStyles, ...theme.colors }}>
      <p>React Context API - test field 2023</p>
    </footer>
  );
};

export default Footer;
