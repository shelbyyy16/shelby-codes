import { Link } from "react-router-dom";

function Header() {

  return (
    <header>
  <nav style={{ boxShadow: 'none', backgroundColor:'#6C8793' }}>
    <div className="nav-wrapper" id='nav-bar'>
    <Link to="/" className="brand-logo"><img src="public/images/Logo.png" id='logo' alt="Logo"></img></Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
      <li><Link to="/about" id='link'><div>About</div></Link></li>
      <li><Link to="/projects" id='link'><div>Projects</div></Link></li>
      <li><Link to="/contact" id='link'><div>Contact</div></Link></li>
      </ul>
    </div>
  </nav>
    </header>
  );
}

export default Header;