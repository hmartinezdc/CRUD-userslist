import PropTypes from "prop-types";
import "./Modal.css";

const Modal = ({ isVisible, children }) => {
  if (!isVisible) return null;
  return <div className="modal">{children}</div>;
};

Modal.propTypes = {
    isVisible: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
};

export default Modal;
