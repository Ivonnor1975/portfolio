import React from 'react';


// Props are passed through our functional component.
function ProjectCard(props) {

  return (
    <div className="website">
        <div className="website-bio">
            <img alt={props.name} src={props.image} />
            <h3>{props.name}</h3>
             <h4>{props.description}</h4>
            <p><a href={props.deployed} target="_blank" rel="noreferrer" className="card-link">Web Deployment</a></p>
            <p><a href={props.github} target="_blank" rel="noreferrer" className="card-link">GitHub Page link</a></p>
        </div>
    </div >
  );
}

export default ProjectCard;
