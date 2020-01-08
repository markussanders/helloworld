import React, { Component } from 'react';

export default class Skills extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <section className="has-text-centered"> 
                <h2 className="title">my skills</h2>
                <div className="columns">
                    <div className="column is-light">
                        <div className="icon is-large">
                            <i className="fab fa-node-js"></i>
                        </div>
                        <h2 className="has-text-info">
                            front end web development
                        </h2>
                        <p className="has-text-dark">
                            JavaScript| React | Redux | HTML5 | CSS 
                        </p>
                    </div>
                    <div className="column is-dark">
                        <div className="icon is-large">
                            <i className="fas fa-database"></i>
                        </div>
                        <h2 className="has-text-info">
                            back end web development
                        </h2>
                        <p className="has-text-dark">
                            Node | Ruby | Rails | REST API | SQL | PostgreSQL 
                        </p>
                    </div>
                </div>
                   <div className="colum is-one-third is-dark">
                       <div className="columns">
                            <div className="column is-half is-light">
                                <div className="icon is-large">
                                    <i className="fas fa-house-damage"></i>
                                </div>
                                <h2 className="has-text-info">
                                    insurance
                                </h2>
                                <p className="has-text-dark">
                                licensed insurance producer, business and commercial |
                                series 6 and 63 licenses
                                </p>
                            </div>
                            <div className="column is-half is-light">
                                <div className="icon is-large">
                                    <i className="fas fa-music"></i>
                                </div>
                                <h2 className="has-text-info">
                                    music performance
                                </h2>
                                <p className="has-text-dark">
                                    piano | oboe | flute | saxophone | trumpet | french horn | violin | viola | cello 
                                </p>
                            </div>
                       </div>
                   </div>
            </section>
        )
    }
}