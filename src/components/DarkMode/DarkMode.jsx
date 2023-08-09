// import { useState } from "react";
import PropTypes from "prop-types";

import "./DarkMode.css";
const DarkMode = ({ isActiveDarkMode, setIsActiveDarkMode }) => {
  // const [isActiveDarkMode, setIsActiveDarkMode] = useState(false);
  const handleActiveDarkMode = () => {
    setIsActiveDarkMode(!isActiveDarkMode);
    document.body.classList.toggle("dark-mode");
  };

  return (
    <button
      onClick={handleActiveDarkMode}
      className={isActiveDarkMode ? "switch-btn  " : "switch-btn  active"}
    >
      <span></span>
      <span></span>
    </button>
  );
};

DarkMode.propTypes = {
    isActiveDarkMode: PropTypes.bool.isRequired,
    setIsActiveDarkMode: PropTypes.func.isRequired,
}

export default DarkMode;
