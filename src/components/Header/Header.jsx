import PropType from "prop-types";
import "./Header.css";

const Header = ({ onCreate }) => {
  return (
    <header className="header">
      <div className="header__title">
        <h1>Users list</h1>
        {/* <p>Add user to the dashboard so they can manage the content</p> */}
      </div>
      <div className="header__create">
        <div  className="header__create-button">
          <p>
          <i className="fa-solid fa-user"></i>
            Create a new user</p>
          <button onClick={() => onCreate()}>Create</button>
        </div>
      </div>      
    </header>
  );
};

Header.propTypes = {
  onCreate: PropType.func,
};

export default Header;
