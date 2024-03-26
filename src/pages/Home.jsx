import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="row container" id="landing">
        <div id="landing-info" className="col s6">
          <h1>Hi, I am Shelby</h1>
          <h5>
            As a Full Stack Developer and Critical Care Nurse, I enjoy using my
            diverse experiences to help create solutions that matter.
          </h5>
          <Link to="/about">
            <button id="primary-button">About Me</button>
          </Link>
        </div>
        <div className="col s6">
          <img src="/images/landing.png" alt="Image" id="landing-image"></img>
        </div>
      </div>

      <div id="landing-quote">
        <h4>
          My journey is a testament to the idea that career transitions are
          possible with determination and a commitment to learning.
        </h4>
      </div>

      <div id="landing-portfolio" className="row">
        <div className="col s4">
          <img
            src="/images/CartQuestMockUp.png"
            id="landing-portfolio-item"
          ></img>
        </div>
        <div className="col s4">
          <img
            src="/images/PetalsandPots MockUp.png"
            id="landing-portfolio-item"
          ></img>
        </div>
        <div className="col s4">
          <img src="/images/SPLITMockUp.png" id="landing-portfolio-item"></img>
        </div>
        <div
          className="col s12"
          id="landing-portfolio-button"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Link to="projects">
            <button id="secondary-button">View My Portfolio</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
