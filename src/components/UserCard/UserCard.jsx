import PropTypes from "prop-types";
import { dateConversion } from "../../utils/dateConversion";
import "./UserCard.css";

const UserCard = ({
  user,
  onEditUser,
  handleDeleteUserModal
}) => {
  return (
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
          Edit
        </button>
        <button
          className="user__data__button--delete"
          onClick={() => handleDeleteUserModal(user.id, user.first_name)}
        >
          <i className="fa-regular fa-trash-can"></i>
        </button>
      </div>
    </article>
  );
};
UserCard.propTypes = {
  user: PropTypes.object.isRequired,
  onEditUser: PropTypes.func.isRequired,
  handleDeleteUserModal: PropTypes.func.isRequired,
};

export default UserCard;
