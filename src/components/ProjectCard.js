import React from 'react';

const ProjectCard = props => {
    const project = props.project;
    
    return (

        <div className="tile is-child box blog-column project" onClick={() => props.handleClick(project)}>
            <div className="container blog-image-container">
                <figure className="image" >
                    <img className="blog-image" src={project.image} alt={`Screenshot of homepage from ${project.title}`} />
                </figure>
            </div>
            <div className="blog-title-container">
                <h2 className="subtitle blog-title">{project.title}</h2>
            </div>
        </div>       
    ) 
}


export default ProjectCard;