import React from 'react';
import Welcome from '../components/Welcome';
import frown from '../photos/markus-frown-laugh.jpg';
import avataaar from '../images/avatar-angry-laugh.svg';
import HoverPhoto from '../components/HoverPhoto';

const Head = props => {

    return (
        <section className="hero is-sixth is-medium">
            <div className="hero-body">
                <div className="container has-text-centered">
                    <HoverPhoto avatar={avataaar} photo={frown}/>                     
                    <Welcome />
                </div>
            </div>
        </section>
    )
}

export default Head;