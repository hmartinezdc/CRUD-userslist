import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import { useState } from "react";
import "./UserForm.css";

const UserForm = ({ onClose, onSendDataUser, initialData }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const { register, handleSubmit } = useForm({
    defaultValues: initialData,
  });

  const onSubmit = (data) => {
    if (initialData) onSendDataUser({ id: initialData.id, ...data });
    else onSendDataUser(data);
  };

  const handlePasswordVisible = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <form className="form__container" onSubmit={handleSubmit(onSubmit)}>
      <div className="form__title">
        <h2> {initialData ? "Edit User" : "Create a new User"}</h2>
        <p> {initialData ? "" : "Please fill in all details"} </p>
      </div>
      <button className="button__close" type="button" onClick={() => onClose()}>
        <i className="fa-solid fa-xmark"></i>
      </button>
      <label className="form__label">
        First Name
        <input type="text" {...register("first_name")} required />
      </label>
      <label className="form__label">
        Last Name
        <input type="text" {...register("last_name")} required />
      </label>
      <label className="form__label">
        Email
        <input type="email" {...register("email")} required />
      </label>
      <label className="form__label form__label--password">
        Password
        <input
          type={isPasswordVisible ? "text" : "password"}
          {...register("password")}
          required
        />
        {isPasswordVisible ? (
          <i onClick={handlePasswordVisible} className="fa-solid fa-eye"></i>
        ) : (
          <i
            onClick={handlePasswordVisible}
            className="fa-solid fa-eye-slash"
          ></i>
        )}
      </label>
      <label className="form__label">
        Birthday
        <input type="date" {...register("birthday")} required />
      </label>
      <label className="form__label">
        Photo URL
        <input type="text" {...register("image_url")} />
      </label>
      <button className="button__create" type="submit">
        {" "}
        {initialData ? "Save changes" : "Create user"}
      </button>
    </form>
  );
};

UserForm.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSendDataUser: PropTypes.func.isRequired,
  initialData: PropTypes.object,
};

export default UserForm;
