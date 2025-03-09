import NavButton from "./NavButton";
import { Link } from "react-router-dom";
import logo from "../images/actual-logo.png";


const NavMenu = () => {
  return (
    <nav className="navmenu">
      <ul className="nav-links">
        <li className="nav-logo">
          <Link to="/">
            <img src={logo} alt="Logo" className="logo-img" />
          </Link>
        </li>
        <NavButton to="/coding" className="nav-coding">Coding</NavButton>
        <NavButton to="/comics" className="nav-comics">Comics</NavButton>
        <NavButton to="/contact" className="nav-contact">Contact</NavButton>
      </ul>
    </nav>
  );
};

export default NavMenu;

