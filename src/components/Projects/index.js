// Import 'useState' Hook from React
import React, { useState } from 'react';
import ProjectCard from "../ProjectCard";

const projects = [
  {
    "id": 1,
    "name": "Conroe Spaces",
    "description":" A Storage Facility web site called Conroe Spaces",
    "image": "./assets/projects/0.JPG",
    "github": "https://",
    "deployed": "https://conroespaces.com"
  },
  {
    "id": 2,
    "name": "Run Budy",
    "description": "A functional web app that offers Fitness Training Services",
    "image": "./assets/projects/1.JPG",
    "github": "https://github.com/",
    "deployed": "https://ivonnor1975.github.io/run-buddy/"
  },
  {
    "id": 3,
    "name": "Discovery History",
    "description": "A functional web app that allows users to learn history events",
    "image": "./assets/images/2",
    "github": "https://github.com/Jsumme1/you-can-blogit",
    "deployed": "https://cabralwilliams.github.io/discover-history/"
  }
]


function Projects(props) {
  // Using useState, declare a new state variable 'friendsList' and set it to the 'friends' array from 'friends.json'
  const [projectList, setProjectList] = useState(projects);

  return (
    <div >
        <section id="projects" className="container-fluid  mt-2 rounded-3">
            <div className="row">
              <h2 className="text-center card-header rounded-3 mb-3">Projects</h2>
            </div>
            <div className="row d-flex justify-content-center">
                {props.children}
                {/* Map through 'portfolioList' and render a 'Card' for each project */}
                {projectList.map((projects) => (
                    <ProjectCard
                        key={projects.id}
                        image={projects.image}
                        name={projects.name}
                        description={projects.description}
                        github={projects.github}
                        deployed={projects.deployed}
                    />
                ))}
            </div>
        </section >
    </div>

);
}


export default Projects;

