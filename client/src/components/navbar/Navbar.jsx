import "./Navbar.css"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="navContainer">
      <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
        <span className="logo"> Elaco Coworking Space</span>
        </Link>
        
        {user ? user.username : (
          <div className="navItems">
            <button className="navButton">Register</button>
            <button className="navButton">Login</button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
// nziddha bech ybenli il photo zeda mta il user
// {user ? user.email : (
//   <div className="navItems">
//     <button className="navButton">Register</button>
//     <button className="navButton">Login</button>
//   </div>
// )}