import NavButton from "./NavButton";

const NavMenu = () => {
  return (
    <nav className="navmenu">
      <ul className="nav-links">
        <NavButton to="/" className="nav-logo">Logo</NavButton>
        <NavButton to="/coding" className="nav-coding">Coding</NavButton>
        <NavButton to="/comics" className="nav-comics">Comics</NavButton>
        <NavButton to="/contact" className="nav-contact">Contact</NavButton>
      </ul>
    </nav>
  );
};

export default NavMenu;

