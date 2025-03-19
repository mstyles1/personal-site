import NavButton from "./NavButton";
import { Link } from "react-router-dom";


const NavMenu = () => {
  return (
    <nav className="navmenu">
      <ul className="nav-links">
        <li className="nav-logo">
          <Link to="/">
            <img src="/imges/M-logo.png" alt="Logo" className="logo-img" />
          </Link>
        </li>
        <NavButton to="/coding" className="nav-coding">CODING</NavButton>
        <NavButton to="/comics" className="nav-comics">COMICS</NavButton>
        <NavButton to="/contact" className="nav-contact">CONTACT</NavButton>
      </ul>
    </nav>
  );
};

export default NavMenu;

