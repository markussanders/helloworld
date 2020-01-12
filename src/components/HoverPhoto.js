import React, { Component } from 'react';

export default class HoverPhoto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hover: false,
        }
    }

    hoverTrue = () => {
        this.setState({ hover: true });
    }

    hoverFalse = () => {
        this.setState({ hover: false });
    }

    renderImage = () => {
        if (!this.state.hover) {
            return <img className="avatar-image" src={this.props.avatar} alt="avataaar of markus" onMouseEnter={() => this.hoverTrue()} />
        } else {
            return <img className="profile-pic" src={this.props.photo} alt="profile pic of markus" /> 
        }
    }

    render() {
        return (
            <div className="image-crop"  onMouseLeave={() => this.hoverFalse()}>
                {this.renderImage()}
            </div>  
        )
    }
}