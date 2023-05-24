import PropTypes from "prop-types";
import "./ModalDelete.css";

const ModalDelete = ({
  onModalDelete,
  onCloseDeleteModal,
  onDeleteUser,
  userIdToDelete,
  userNameToDelete,
}) => {
  if (!onModalDelete) return;
  return (
    <div className="modal__delete__container">
      <div className="modal__delete--content">
        <button
          className="modal__delete-button--close"
          type="button"
          onClick={onCloseDeleteModal}
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
        <h2 className="modal__delete__title">
          Are you sure you want to delete <span>@{userNameToDelete}</span> from this list?{" "}
        </h2>
        <div className="modal__delete__btn">
          <button
            className="modal__delete__btn--cancel"
            onClick={onCloseDeleteModal}
          >
            Cancel
          </button>
          <button onClick={() => onDeleteUser(userIdToDelete)} className="modal__delete__btn--delete">Delete</button>
        </div>
      </div>
    </div>
  );
};

ModalDelete.propTypes = {
  onModalDelete: PropTypes.bool,
  onCloseDeleteModal: PropTypes.func,
  onDeleteUser: PropTypes.func,
  userIdToDelete: PropTypes.number,
  userNameToDelete: PropTypes.string,
};

export default ModalDelete;
