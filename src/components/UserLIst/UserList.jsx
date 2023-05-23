import PropTypes from "prop-types";
import "./UserList.css";
import { dateConversion } from "../../utils/dateConversion";
// import { useState } from "react";

const UserList = ({ users, onEditUser, onDeleteUser }) => {
  // const [deleteUserModal, setDeleteUserModal] = useState(false);

  if (!users.length) return <p>No existen usuarios</p>;

  return (
    <main className="user__list-container">
      {users.map((user) => (
        <article className="user__data--container" key={user.id}>
          <div className="user__data--image">
            <img src={user.image_url? user.image_url : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"} alt={user.first_name + " " + user.last_name} />
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
            { dateConversion(user.birthday) }
          </p>
          <div className="user__data__buttons">
            <button
              className="user__data__button--edit"
              onClick={() => onEditUser(user)}
            >
              Edit
            </button>
            <button
              className="user__data__button--delete"
              onClick={() => onDeleteUser(user.id)}
            >
              <i className="fa-regular fa-trash-can"></i>
            </button>
            {/* <button onClick={() => setDeleteUserModal(true)}>
              <i className="fa-regular fa-trash-can"></i>
            </button> */}
          </div>
        </article>
      ))}
    </main>
  );
};

UserList.propTypes = {
  users: PropTypes.array,
  onEditUser: PropTypes.func,
  onDeleteUser: PropTypes.func,
};

export default UserList;
