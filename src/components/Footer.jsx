import { Link } from "react-router-dom";


function Footer() {
  return (
    <footer className="page-footer" id='footer'>
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">Shelby Codes</h5>
            <p className="grey-text text-lighten-4">
              Full Stack Developer
            </p>
          </div>
          <div className="col l4 offset-l2 s12">
            <Link to="https://www.linkedin.com/in/shelbypagan/" target="_blank">
            <img src="public/images/linkedin.png" id ='icon' alt="LinkedIn Profile" width="20" height="20"></img>
            </Link>
            <Link to="https://github.com/shelbyyy16" target="_blank">
            <img src="public/images/github.png" id ='icon' alt="LinkedIn Profile" width="20" height="20"></img>
            </Link>
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
