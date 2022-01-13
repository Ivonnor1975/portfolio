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
      <div>
        <ul>
          <li>
            <strong>Project Name:</strong> {props.name}
          </li>
          <li>
            <strong>Description:</strong> {props.description}
          </li>
          <li>
            <strong>GitHub Link:</strong> {props.github}
          </li>
          <li>
            <strong>Deployed Link:</strong> {props.deployed}
          </li>
        </ul>
      </div>
      </div>
    </div>
  );
}

export default ProjectCard;
