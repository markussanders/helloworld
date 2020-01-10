import React, { Component } from 'react';
import Avatar from 'avataaars';
import Welcome from '../components/Welcome';

export default class Head extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <section className="hero is-fourth is-medium">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <Avatar
                            avatarStyle='Circle'
                            topType='ShortHairTheCaesar'
                            accessoriesType='Blank'
                            hairColor='Black'
                            facialHairType='Blank'
                            clotheType='ShirtVNeck'
                            clotheColor='Gray02'
                            eyeType='Happy'
                            eyebrowType='AngryNatural'
                            mouthType='Smile'
                            skinColor='Black'
                        />
                        <Welcome />
                    </div>
                </div>
            </section>
        )
    }
}