import React from "react";
import { Link } from "react-router-dom";
import projectsData from "/src/projects.json"; 

function Projects() {
  return (
    <>
      <div id="projects-header">
        <h3>It All Begins With An Idea</h3>
        <br></br>
        <br></br>
        <h5>
          Here are the results of dozens of cups of coffee, many lines of code,
          and hours of debugging
        </h5>
      </div>
      <div id="landing-portfolio" className="row">
        {projectsData.map((project, index) => (
          <div className="col s4" key={index}>
            <div>
              <img
                src={project.image}
                alt={project.name}
                id="landing-portfolio-item"
              />
              <div className="project-info">
                <h4>{project.name}</h4>
                <p>{project.tagline}</p>
                <p>{project.description}</p>
                <div>
                  <Link to={project.live}>
                    <button id="secondary-button">View Live</button>
                  </Link>
                  <Link to={project.git}>
                    <button id="secondary-button">GitHub</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default Projects;
