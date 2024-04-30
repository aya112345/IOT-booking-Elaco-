import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import TableRestaurantIcon from '@mui/icons-material/TableRestaurant';
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import ChairIcon from '@mui/icons-material/Chair';
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import WifiPasswordIcon from '@mui/icons-material/WifiPassword';
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Sidebar = (userId) => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Admin of Elaco</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
          <Link to="/" style={{ textDecoration: "none" }}>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </Link>
          </li>
          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/spaces" style={{ textDecoration: "none" }}>
            <li>
              <TableRestaurantIcon className="icon" />
              <span>Space Tables</span>
            </li>
          </Link>
          <Link to="/tables" style={{ textDecoration: "none" }}>
            <li>
              <ChairIcon className="icon" />
              <span>Chairs</span>
            </li>
          </Link>
          <li>
            <AddLocationIcon className="icon" />
            <span>Location</span>
          </li>
          <p className="title">Contact</p>
          <li>
  <Link to="https://www.facebook.com/ElacoCoworkingBorjCedria" style={{ textDecoration: 'none' }}>
    <FacebookIcon className="icon" />
    <span>Facebook</span>
  </Link>
</li>
<li>
  <Link to="https://www.instagram.com/elaco_coworking_space?igsh=bTl2eTliNjI3NWd1" style={{ textDecoration: 'none' }}>
    <InstagramIcon className="icon" />
    <span>Instagram</span>
  </Link>
</li>
<li>
  <a href="https://api.whatsapp.com/send?phone=21620838552" style={{ textDecoration: 'none' }}>
    <WhatsAppIcon className="icon" />
    <span>WhatsApp</span>
  </a>
</li>
<li>
  <a href="tel:+21620838552" style={{ textDecoration: 'none' }}>
    <LocalPhoneIcon className="icon" />
    <span>Phone</span>
  </a>
</li>

          <p className="title">services</p>
        
          <li>
            <WifiPasswordIcon className="icon" />
            <span>Wifi Password</span>
          </li>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Settngs</span>
          </li>
          <p className="title">USER</p>
          <li>
  <Link to={`http://localhost:3000/spaces/${userId}`} style={{ textDecoration: 'none' }}>
    <AccountCircleOutlinedIcon className="icon" />
    <span>Profile</span>
  </Link>
</li>
          <li>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;