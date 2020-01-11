import React, { Component } from 'react';
import Welcome from '../components/Welcome';
import frown from '../photos/markus-frown-laugh.jpg';
import avataaar from '../images/avatar-angry-laugh.svg';

export default class Head extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hover: false,
        };
    }

    hoverTrue = () => {
        this.setState({ hover: true });
    }

    hoverFalse = () => {
        this.setState({ hover: false });
    }

    renderImage = () => {
        if (!this.state.hover) {
            return <img className="" src={avataaar} alt="avataaar of markus frowning/smiling" onMouseEnter={() => this.hoverTrue()} />
        } else {
            return <img className="profile-pic" src={frown} alt="markus frowning/smiling" /> 
        }
    }

    render() {
        return (
            <section className="hero is-sixth is-medium">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <div className="image-crop"  onMouseLeave={() => this.hoverFalse()}>
                            {this.renderImage()}
                        </div>                       
                        <Welcome />
                    </div>
                </div>
            </section>
        )
    }
}