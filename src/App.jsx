import { useEffect, useState } from "react";
import { getAllUser } from "./services/getAllUsers";
import { createUser } from "./services/createUser";
import { updateUser } from "./services/updateUser";
import { deleteUser } from "./services/deleteUser";
import usersDefault from "./assets/userListDefault.json";
import Header from "./components/Header/Header";
import UserList from "./components/UserLIst/UserList";
import Modal from "./components/Modal/Modal";
import UserForm from "./components/UserForm/UserForm";
import Footer from "./components/Footer/Footer";
import { seachUsersByFullName } from "./utils/searchUsersByFullName";
import DarkMode from "./components/DarkMode/DarkMode";
import "./App.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [users, setUsers] = useState([]);
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const [editingUserData, setEditingUserData] = useState(null);
  const [searchUser, setSearchUser] = useState("");
  const [isActiveDarkMode, setIsActiveDarkMode] = useState(false);

  const usersFilter = seachUsersByFullName(searchUser, users);

  const loadUsers = async () => {
    const userData = await getAllUser();
    if (userData.length) setUsers(userData);
    else setUsers(usersDefault);
  };

  const handleCloseModal = () => {
    setIsVisibleModal(false);
    setEditingUserData(null);
  };

  const handleCreate = () => {
    setEditingUserData(null);
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
    await deleteUser(id);
    await loadUsers();
    setIsDeleteModal(false);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <>
      <DarkMode
        isActiveDarkMode={isActiveDarkMode}
        setIsActiveDarkMode={setIsActiveDarkMode}
      />
      <ToastContainer
        position="top-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={ !isActiveDarkMode ? "colored" : "dark"}
      />
      <Header
        onCreate={handleCreate}
        searchUser={searchUser}
        setSearchUser={setSearchUser}
      />
      {!users.length == 0 ? (
        <UserList
          usersFilter={usersFilter}
          onEditUser={handleEditUser}
          onDeleteUser={handleDeleteUser}
          isDeleteModal={isDeleteModal}
          setIsDeleteModal={setIsDeleteModal}
        />
      ) : (
        <h3
          style={{
            textAlign: "center",
            paddingTop: "23%",
            paddingBottom: "23%",
          }}
        >
          Loading users...
        </h3>
      )}
      <Modal isVisible={isVisibleModal}>
        <UserForm
          onClose={handleCloseModal}
          onSendDataUser={handleSendDataUser}
          initialData={editingUserData}
        />
      </Modal>
      <Footer />
    </>
  );
}

export default App;
