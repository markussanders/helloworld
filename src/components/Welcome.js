import React, { Component } from 'react';

export default class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phase: 1,
        };
    }

    setPhase() {
        setInterval(() => {
            return this.state.phase === 3 ? null : this.setState({ phase: this.state.phase + 1});
        }, 2000);
    }

    toggleWelcomeMessage() {
        switch (this.state.phase) {
            case 1:
                return <h2 className="subtitle">my name is markus sanders</h2>;
            case 2: 
                return <h2 className="subtitle">i'm a full stack web developer</h2>;
            case 3:
                return <h2 className="subtitle">i build things</h2> 
            default: 
                return <h2 className="subtitle">my name is markus and i'm a full stack web developer</h2>
        }
    }

    componentDidMount() {
        this.setPhase();
    }

    render() {
        return (
            <div>
                <h1 className="title">
                    hello, world!
                </h1>
                {this.toggleWelcomeMessage()}
            </div>
        ) 
    }
}