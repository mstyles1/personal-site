import { Link } from "react-router-dom";

const NavMenu = () => {
  return (
    <nav className="navmenu">
      <ul className="nav-links">
        <li><Link to="/">Logo</Link></li>
        <li><Link to="/coding">Coding</Link></li>
        <li><Link to="/comics">Comics</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default NavMenu;
