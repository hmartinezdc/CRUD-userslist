import PropType from "prop-types";
import "./Header.css";

const Header = ({ onCreate }) => {
  return (
    <header className="header">
      <div className="header__title">
        <h1>Users list</h1>
        <p>Add user to the dashboard so they can manage the content</p>
      </div>
      <div className="header__create">
        <div className="header__create-search">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input type="search" placeholder="Search a user" />
        </div>
        <div className="header__create-button">
          <p>
            <i className="fa-solid fa-user"></i>
            New user
          </p>
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
