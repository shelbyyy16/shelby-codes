function Projects() {
    return (
    <>
  <div id="projects-header">
    <h3>It All Begins With An Idea</h3>
    <br></br><br></br>
      <h5>Here are the results of dozens of cups of coffee, many lines of code and hours of debugging</h5>
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
        </div>
      </div>


    </>

    )
  }
  
  export default Projects;