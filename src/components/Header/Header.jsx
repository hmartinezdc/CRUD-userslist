import PropType from "prop-types";
import "./Header.css";

const Header = ({ onCreate, searchUser, setSearchUser }) => {

  const handleSearchUser = (e) => {
    const value = e.target.value
    setSearchUser(value)
  };

  return (
    <header className="header">
      <div className="header__title">
        <h1>Users list</h1>
        <p>Add user to the dashboard so they can manage the content</p>
      </div>
      <div className="header__create">
        <div className="header__create-search">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder="Search a user" value={searchUser} onChange={handleSearchUser} />
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
  searchUser: PropType.string,
  setSearchUser: PropType.func,
};

export default Header;
