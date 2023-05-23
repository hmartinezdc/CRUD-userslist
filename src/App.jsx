import { useEffect, useState } from "react";
import { getAllUser } from "./services/getAllUsers";
import { createUser } from "./services/createUser";
import { updateUser } from "./services/updateUser";
import { deleteUser } from "./services/deleteUser";
import Header from "./components/Header/Header";
import UserList from "./components/UserLIst/UserList";
import Modal from "./components/Modal/Modal";
import UserForm from "./components/UserForm/UserForm";
import usersDefault from "./assets/userListDefault.json"
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [editingUserData, setEditingUserData] = useState(null);

  const loadUsers = async () => {
    const userData = await getAllUser();
    if (userData.length) setUsers(userData);
    else setUsers(usersDefault)
  };

  const handleCloseModal = () => {
    setIsVisibleModal(false);
    setEditingUserData(null);
  };

  const hanbleCreate = () => {
    setIsVisibleModal(true);
  };

  const handleSendDataUser = async (data) => {
    if (data.id) await updateUser(data.id, data);
    else await createUser(data);
    await loadUsers();
    setIsVisibleModal(false);
  };

  const handleEditUser = (dataUser) => {
    setEditingUserData(dataUser);
    setIsVisibleModal(true);
  };

  const handleDeleteUser = async (id) => {
    await deleteUser(id)
    await loadUsers();
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <>
      <Header onCreate={hanbleCreate} />
      <UserList
        users={users}
        onEditUser={handleEditUser}
        onDeleteUser={handleDeleteUser}
      />
      <Modal isVisible={isVisibleModal}>
        <UserForm
          onClose={handleCloseModal}
          onSendDataUser={handleSendDataUser}
          initialData={editingUserData}
        />
      </Modal>
    </>
  );
}

export default App;