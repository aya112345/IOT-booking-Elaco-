import "./Navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">Elaco Coworking Space</span>
        </Link>
        
        {user ? (
          <div className="userInfo">
            <div className="items">
              <div className="item">
                <img
                  src={user.img} // Assuming user.img contains the URL of the user's avatar
                  alt="User Avatar"
                  className="avatar"
                />
              </div>
              <span className="username">{user.username}</span>
            </div>
          </div>
        ) : (
          <div className="navItems">
            <Link to="/login" style={{ color: "inherit", textDecoration: "none" }}>
              <button className="navButton">Register</button>
            </Link>
            <Link to="/login" style={{ color: "inherit", textDecoration: "none" }}>
              <button className="navButton">Login</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;