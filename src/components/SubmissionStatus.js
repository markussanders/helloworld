import React, { Component } from 'react';

export default class SubmissionState extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalActive: this.props.isSubmitted,
            count: -10,
            color: "is-primary",
        };
    }
    
    renderProgressBar() {
        return (
            <section className="modal-card-body">
                <h2 className="subtitle">Sending...</h2>
                <progress className={`progress ${this.state.color}`} value={`${this.state.count}`} max="100">{`${this.state.count}%`}</progress>
            </section>
        )
    }

    updateProgressBar() {
        setInterval(() => {
            if (this.state.count > 120) return;
            this.state.count === 100 ?  this.handleColorChange() : this.setState({count: this.state.count + 5});
        }, 50)
    }

    handleColorChange() {
        const color = this.props.status ? "is-success" : "is-danger";
        this.setState({ color });
        setTimeout(() => this.setState({loaded: true}), 1000);
    }
    
    handleSuccess() {
        return (
            <div>
                <section className="modal-card-body">
                    <h2 className="subtitle">Your message was submitted successfully! I'll be in contact with you soon!</h2>
                </section>
                <footer className="modal-card-foot">
                    <button className="button is-success" onClick={() => this.setState({modalActive: false})}>Go Back</button>
                </footer>
            </div>
        )
    }
    
    handleFailure() {
        return (
            <div>
                <section className="modal-card-body">
                    <h2 className="subtitle">Hmm... it looks like there was an error sending your message. Let's try this using your default email client.</h2>
                </section>
                <footer className="modal-card-foot">
                    <button className="button is-success" onClick={() => this.props.launchDefaultMailer()}>Try with default email client</button>
                </footer>
            </div>
        )  
    }

    renderContent() {
        if (this.state.count <= 100 && !this.state.loaded) return this.renderProgressBar();
        else if (this.props.status) return this.handleSuccess();
        else if (!this.props.status) return this.handleFailure();
    }

    componentDidMount() {
        this.updateProgressBar();
    }

    render(){
        return (
            <div className={this.state.modalActive ? "modal is-active" : "modal" }>
                <div className="modal-background"></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title">Thanks for taking the time to reach out!</p>
                        <button className="delete" aria-label="close" onClick={() => this.setState({modalActive: false})}></button>
                    </header>
                    {this.renderContent()}
                </div>
            </div>
        )
    }
}


