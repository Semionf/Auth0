import React, { useState, useContext } from "react";
import { ThemeContext } from "./../context/theme.context";

function Toggle(props) {
  const [isLight, setLight] = useState(true);
  const { theme, handleThemeChange } = useContext(ThemeContext);
  const getButtonTheme = () => {
    return isLight ? "btn btn-light" : "btn btn-dark";
  };
  const handleTheme = () => {
    setLight((prev) => !prev);
    handleThemeChange();
  };
  return (
    <button type="button" onClick={handleTheme} className={getButtonTheme()}>
      Light
    </button>
  );
}

export default Toggle;
