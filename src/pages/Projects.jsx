import React, { useState } from "react";
import { Link } from "react-router-dom";
import projectsData from "/src/projects.json"; 

function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null); // State to track hovered project

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
              <img
                src={project.image}
                id="landing-portfolio-item"
                alt={project.name}
                onMouseEnter={() => setHoveredProject(project)}
                onMouseLeave={() => setHoveredProject(null)}
                className="project-image" 
              />
            {/* Display project info if hovered */}
            {hoveredProject === project && (
              <div className="project-info">
                <h4>{project.name}</h4>
                <p>{project.tagline}</p>
                <p>{project.description}</p>
                <p><Link to={project.live}>
                    <button id="secondary-button">View Live</button>
                    </Link>
                    <Link to={project.git}>
                    <button id="secondary-button">GitHub</button>
                    </Link> </p>
              </div>
            )}
          </div>
        ))}
        <div
          className="col s12"
          id="landing-portfolio-button"
          style={{ display: "flex", justifyContent: "center" }}
        ></div>
      </div>
    </>
  );
}
export default Projects;

