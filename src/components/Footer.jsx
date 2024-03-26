import { Link } from "react-router-dom";


function Footer() {
  return (
    <footer className="page-footer" id='footer'>
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h6 id="highlight">Shelby Codes</h6>
          </div> 
        </div>
      </div>
        <div className="container">
          © 2024 Shelby Pagan
          <div className="grey-text text-lighten-4 right" >       
            <Link to="https://www.linkedin.com/in/shelbypagan/" target="_blank">
            <img src="public/images/linkedin.png" id ='icon' alt="LinkedIn Profile" width="20" height="20"></img>
            </Link>
            <Link to="https://github.com/shelbyyy16" target="_blank">
            <img src="public/images/github.png" id ='icon' alt="LinkedIn Profile" width="20" height="20"></img>
            </Link>
          </div>
        </div>
     
    </footer>
  );
}

export default Footer;
