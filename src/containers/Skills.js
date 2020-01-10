import React from 'react';
import dataIcon from '../images/data-icon.svg';
import frontEndIcon from '../images/front-end-icon.svg';
import insuranceIcon from '../images/insurance-icon.svg';
import pianoIcon from '../images/piano-icon.svg';

const Skills = props => {

    return (
        <section className="has-text-centered "> 
            <h2 className="title" id="skills">my skills</h2>
            <div className="tile is-parent">
                <div className="tile is-child is-6">
                    <figure className="image">
                        <img className="skill-icon" src={frontEndIcon} alt="front-end-icon" />
                    </figure>
                    <h2 className="has-text-info">
                        front end web development
                    </h2>
                    <p className="skill-content has-text-dark">
                        JavaScript| React | Redux | HTML5 | CSS 
                    </p>
                </div>
                <div className="tile is-child is-6 ">
                    <figure className="image">
                        <img className="skill-icon" src={dataIcon} alt="data-icon" />
                    </figure>
                    <h2 className="has-text-info">
                        back end web development
                    </h2>
                    <p className="skill-content has-text-dark">
                        Node | Ruby | Rails | REST API | SQL | PostgreSQL 
                    </p>
                </div>
            </div>
            <div className="tile is-parent has-content-centered">
                <div className="tile is-child is-4 ">
                    <figure className="image">
                        <img className="skill-icon" src={insuranceIcon} alt="insurance-icon" />
                    </figure>
                    <h2 className="has-text-info">
                        insurance
                    </h2>
                    <p className="skill-content has-text-dark">
                        licensed insurance producer, business & commercial |
                        series 6 and 63 licenses
                    </p>
                </div>
                <div className="tile is-child is-4 ">
                    <figure className="image">
                        <img className="skill-icon" src={pianoIcon}  alt="piano-icon"/>
                    </figure>
                    <h2 className="has-text-info">
                        music performance
                    </h2>
                    <p className="skill-content has-text-dark">
                        piano | oboe | flute | saxophone | trumpet | french horn | violin | viola | cello 
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Skills;