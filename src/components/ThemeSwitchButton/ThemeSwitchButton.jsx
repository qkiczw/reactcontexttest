import React from "react";

const DefaultStyles = {
  backgroundColor: "#37474f",
  color: "#fff",
  border: "1px solid #b0bec5",
  borderRadius: "10px",
  padding: "7px 10px",
  position: "absolute",
  top: "10px",
  right: "10px",
  cursor: "pointer",
};

const ThemeSwitchButton = ({ ...props }) => {
  return (
    <button onClick={props.changeTheme} style={{ ...DefaultStyles }}>
      Change Theme
    </button>
  );
};

export default ThemeSwitchButton;
