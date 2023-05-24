import PropTypes from "prop-types";
import "./UserList.css";
import { dateConversion } from "../../utils/dateConversion";
import ModalDelete from "../ModalDelete/ModalDelete";
import { useState } from "react";

const UserList = ({ onEditUser, onDeleteUser, isDeleteModal, setIsDeleteModal,  usersFilter  }) => {
  const [userIdToDelete, setUserIdToDelete] = useState(null);
  const [userNameToDelete, setUserNameToDelete] = useState(null);

  const handleDeleteUserModal = (userId, userName) => {
    setIsDeleteModal(true);
    setUserIdToDelete(userId);
    setUserNameToDelete(userName);
  };

  const hableCloseDeleteModal = () => {
    setIsDeleteModal(false);
    setUserIdToDelete(null);
    setUserNameToDelete(null);
  };

  if (!usersFilter.length) return <p>No existen usuarios</p>;

  return (
    <main className="user__list-container">
      {usersFilter.map((user) => (
        <article className="user__data--container" key={user.id}>
          <div className="user__data--image">
            <img
              src={
                user.image_url
                  ? user.image_url
                  : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              }
              alt={user.first_name + " " + user.last_name}
            />
          </div>
          <h2 className="user__data--fullname user__data--full">
            <span>Full name: </span>
            {user.first_name} {user.last_name}
          </h2>
          <p className="user__data--email user__data--full">
            <span>Email: </span>
            {user.email}
          </p>
          <p className="user__data--birthday user__data--full">
            <span>Birthday: </span>
            {dateConversion(user.birthday)}
          </p>
          <div className="user__data__buttons">
            <button
              className="user__data__button--edit"
              onClick={() => onEditUser(user)}
            >
              <i className="fa-solid fa-pen"></i>
            </button>
            <button
              className="user__data__button--delete"
              onClick={() => handleDeleteUserModal(user.id, user.first_name)}
            >
              <i className="fa-regular fa-trash-can"></i>
            </button>
          </div>
        </article>
      ))}
      <ModalDelete
        onModalDelete={isDeleteModal}
        onCloseDeleteModal={hableCloseDeleteModal}
        onDeleteUser={onDeleteUser}
        userIdToDelete={userIdToDelete}
        userNameToDelete={userNameToDelete}
      />
    </main>
  );
};

UserList.propTypes = {
  users: PropTypes.array,
  onEditUser: PropTypes.func,
  onDeleteUser: PropTypes.func,
  isDeleteModal: PropTypes.bool,
  setIsDeleteModal: PropTypes.func,
  usersFilter: PropTypes.array,
};

export default UserList;
