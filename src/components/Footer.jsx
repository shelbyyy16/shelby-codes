import { Link } from "react-router-dom";


function Footer() {
  return (
    <footer className="page-footer">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">Shelby Codes</h5>
            <p className="grey-text text-lighten-4">
              Full Stack Developer
            </p>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">Explore More</h5>
            <ul>
            <li><Link to="/about"><div>ABOUT</div></Link></li>
            <li><Link to="/projects"><div>PROJECTS</div></Link></li>
            <li><Link to="/contact"><div>CONTACT</div></Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          © 2024 Shelby Pagan
          <a className="grey-text text-lighten-4 right" href="#!">
            More Links
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
