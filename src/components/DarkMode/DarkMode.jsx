import { useState } from "react";

import "./DarkMode.css";
const DarkMode = () => {
  const [isActiveDarkMode, setIsActiveDarkMode] = useState(false);
  const haldleActiveDarkMode = () => {
    setIsActiveDarkMode(!isActiveDarkMode);
    document.body.classList.toggle("dark-mode");
  };

  return (
    <button
      onClick={haldleActiveDarkMode}
      className={isActiveDarkMode ? "switch-btn  " : "switch-btn  active"}
    >
      <span></span>
      <span></span>
    </button>
  );
};

export default DarkMode;
