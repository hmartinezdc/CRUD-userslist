import PropTypes from "prop-types";

import "./DarkMode.css";
const DarkMode = ({ onDarkMode, isActive }) => {
  return (
    <button
      onClick={onDarkMode}
      className={isActive ? "switch-btn  " : "switch-btn  active"}
    >
      <span></span>
      <span></span>
    </button>
  );
};
DarkMode.propTypes = {
  onDarkMode: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default DarkMode;
