import React from 'react';
import './style.css';

// Props are passed through our functional component.
function ProjectCard(props) {
  return (
    <div className="card">
      <div className="img-container">
         <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <h3>{props.name}</h3>
          </li>
          <li>
            <h4>{props.description}</h4>
          </li>
          <li>
            <p><a href={props.deployed} target="_blank" rel="noreferrer" className="card-link">Web Deployment</a></p>
          </li>
          <li>
          <p><a href={props.github} target="_blank" rel="noreferrer" className="card-link">GitHub Page link</a></p>  
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProjectCard;
