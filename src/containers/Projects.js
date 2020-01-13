import React, { Component } from 'react';
import ProjectCard from '../components/ProjectCard';
import projects from '../ProjectData';

export default class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects,
            description: false,
            focusedProject: null,
        }
    }

    renderProjects() {
        return this.state.projects.map(project => {
            return <ProjectCard key={project.id} project={project} handleClick={this.handleClick} />
        })
    }

    handleClick = project => {
        this.setState({
            focusedProject: project,
            description: true,
        })
    }

    handleClose = () => {
        this.setState({
            focusProject: null,
            description: false,
        })
    }

    focusProject = () => {
        const project = this.state.focusedProject;
        return (
            <div className={this.state.focusedProject ? "modal is-active" : "modal" }>
                <div className="modal-background"></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title">{project.title}</p>
                        <button className="delete" aria-label="close" onClick={() => this.handleClose()}></button>
                    </header>
                    <section className="modal-card-body">
                        <figure className="image" >
                            <img className="project-desc-image" src={project.image} alt={`Screenshot of homepage from ${project.title}`} />
                        </figure>
                        <p className="project-desc-text">{project.description}</p>
                    </section>
                    <footer className="modal-card-foot">
                        {project.website ? <button className="button is-first is-inverted">website</button> : null}
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer"><button className="button is-first">github</button></a>
                        <button className="button" onClick={() => this.handleClose()} >go back</button>
                    </footer>
                </div>
            </div>
        )
    }

    renderProjectsDiv = () => {
        return (
            <section className="has-text-centered">
                <div className="divider" id="projects"></div>
                <h2 className="title">my projects</h2>
                <div className="tile is-parent blog-columns">
                    {this.renderProjects()}
                </div>     
            </section>
        )
    }

    render() {
        return (
            this.state.description ? this.focusProject() : this.renderProjectsDiv() 
        )
    }
}