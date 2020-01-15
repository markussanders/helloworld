import React, { Component } from 'react';
import Social from './Social';

export default class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phase: 1,
            hidden: true,
        };
    }

    setPhase() {
        setInterval(() => {
            return this.state.phase === 3 ? this.setState({
                phase: 4,
                hidden: !this.state.hidden
            }) : this.setState({
                phase: this.state.phase + 1
            });
        }, 3000);
    }

    toggleWelcomeMessage() {
        switch (this.state.phase) {
            case 1:
                return <h2 className="subtitle fade-in-text">welcome to my web portfolio!</h2>;
            case 2: 
                return <h2 className="subtitle fade-in-text-1">i build things</h2>;
            case 3:
                return <h2 className="subtitle fade-in-text shake">i build <strong>cool</strong> things</h2> 
            default: 
                return this.renderStaticWelcome();
        }
    }

    renderStaticWelcome() {
        return (
          <h2 className="subtitle">
            my name is <strong>markus sanders</strong> and i'm a <strong>full stack web developer</strong> based
            in the amazing city of <strong>chicago</strong>, illinois!
          </h2>
        );

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
                <div className={this.state.hidden ? "icons--hidden" : "icons--visible"}>
                    <Social />
                </div>
            </div>
        ) 
    }
}