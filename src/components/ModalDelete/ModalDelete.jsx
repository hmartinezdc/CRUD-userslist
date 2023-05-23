import PropTypes from "prop-types";
import "./ModalDelete.css";

const ModalDelete = ({ onModalDelete, children }) => {
  if (!onModalDelete) return;
  return (
    <div className="modal__delete__container">
      {children}
      <h2>Are you sure you want to delete this user? </h2>
      <button>Cancel</button>
      <button>Delete</button>
    </div>
  );
};

ModalDelete.propTypes = {
  onModalDelete: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default ModalDelete;
