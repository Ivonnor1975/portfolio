// Import 'useState' Hook from React
import React, { useState } from 'react';
import ProjectCard from "../ProjectCard";
import projects from './projects.json';

function Projects(props) {
  // Using useState, declare a new state variable 'friendsList' and set it to the 'friends' array from 'friends.json'
   return (
    <section id="projects" className="container-fluid box-padding mt-5">
    <h2 >Projects</h2>
    <div className="row">
          <div className="row d-flex justify-content-center">
              {/* Map through 'portfolioList' and render a 'Card' for each project */}
              {projects.map((pro,i) => (
                  <ProjectCard  key={i} image={require(`../../assets/projects/${i}.jpg`)} {...pro} />
              ))}
          </div>
    </div>
</section >
 );
}

export default Projects;

