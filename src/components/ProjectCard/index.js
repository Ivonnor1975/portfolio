import React from 'react';


// Props are passed through our functional component.
function ProjectCard(props) {

  return (

    <div className="card rounded-2 card-shadow mt-3 m-1 mb-1" style={{ width: '18rem' }}>
        <img alt={props.name} src={props.image} className="rounded card-img-top" />
        <div className="card-body">
            <h6 className="card-title text-center">{props.name}</h6>
            <p className="card-text">{props.description}
            </p>
        </div>
        <div className="card-body">
            <a href={props.deployed} target="_blank" rel="noreferrer" className="card-link">Web Deployment</a>
            <a href={props.github} target="_blank" rel="noreferrer" className="card-link">GitHub Page link</a>
        </div>
    </div >
  );
}

export default ProjectCard;
