import PropTypes from "prop-types";
import { useState } from "react";
import ModalDelete from "../ModalDelete/ModalDelete";
import UserCard from "../UserCard/UserCard";
import "./UserList.css";

const UserList = ({
  onEditUser,
  onDeleteUser,
  isDeleteModal,
  setIsDeleteModal,
  usersFilter,
}) => {
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
      {usersFilter
        .slice()
        .sort((a, b) => a.id - b.id)
        .map((user) => (
          <UserCard
            key={user.id}
            user={user}
            onEditUser={onEditUser}
            handleDeleteUserModal={handleDeleteUserModal}
          />
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
