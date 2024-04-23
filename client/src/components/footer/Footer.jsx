import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="fLists">
        <ul className="fList">
          <li className="fListItem">Space Sypes</li>
          <li className="fListItem">Private office</li>
          <li className="fListItem">Meeting room</li>
          <li className="fListItem">Royal Table</li>
          <li className="fListItem">Normal Table</li>
          <li className="fListItem">Royal View</li>
        </ul>
        <ul className="fList">
        <li className="fListItem">Table Types:</li>
        <li className="fListItem">Table For 1 Per </li>
          <li className="fListItem">Table For 2 Per </li>
          <li className="fListItem">Table For 4 Per </li>
          <li className="fListItem">Table For 6 Per</li>
          <li className="fListItem">Private Office (1 Table)</li>
          <li className="fListItem">Private Office (2 Tables)</li>
          <li className="fListItem">Metting Room Table</li>

        </ul>
        <ul className="fList">
          <li className="fListItem">Prices</li>
          <li className="fListItem">Informations</li>
          <li className="fListItem">Help </li>
          <li className="fListItem">location </li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Contact: </li>
          <li className="fListItem">Facebook</li>
          <li className="fListItem">Instagram</li>
          <li className="fListItem">Whatsapp </li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Privacy and cookies</li>
          <li className="fListItem">Manage your reservations</li>
          <li className="fListItem">About Reservation</li>
          <li className="fListItem">The functioning of our site</li>
        </ul>
      </div>
      <div className="fText">Copyright © 2024 Elaco Coworking space.</div>
    </div>
  );
};

export default Footer;