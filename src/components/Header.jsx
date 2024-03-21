import { Link } from "react-router-dom";

function Header() {

  return (
    <header>
  <nav>
    <div className="nav-wrapper">
    <Link to="/" className="brand-logo"><div>LOGO</div></Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
      <li><Link to="/about"><div>ABOUT</div></Link></li>
      <li><Link to="/projects"><div>PROJECTS</div></Link></li>
      <li><Link to="/contact"><div>CONTACT</div></Link></li>
      </ul>
    </div>
  </nav>
    </header>
  );
}

export default Header;