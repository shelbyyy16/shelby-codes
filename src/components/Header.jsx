import { Link } from "react-router-dom";

function Header() {

  return (
    <header>
  <nav>
    <div className="nav-wrapper" id='nav-bar'>
    <Link to="/" className="brand-logo"><img src="public/images/Logo.png" id='logo' alt="Logo" width="50" height="50"></img></Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
      <li><Link to="/about"><div>About</div></Link></li>
      <li><Link to="/projects"><div>Projects</div></Link></li>
      <li><Link to="/contact"><div>Contact</div></Link></li>
      </ul>
    </div>
  </nav>
    </header>
  );
}

export default Header;