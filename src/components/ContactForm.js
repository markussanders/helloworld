import React, { Component } from 'react';

export default class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            gotcha: false,
        };
    }

    handleInputChange = event => {
        const target = event.target;
        const value = target.value;
        switch(target.name) {
            case 'name':
                return this.setState({ name: value });
            case 'email':
                return this.setState({ email: value});
            case 'message': 
                return this.setState({ message: value});
            case '_gotcha':
                return this.setState({ gotcha: true });
            default:
                return undefined;
        }
    }

    render() {
        return (
            <section className="is-white">
                <div className="container">     
                    <form id="form" accept-charset="UTF-8" action="https://usebasin.com/f/363b98eca5af" method="POST">
                        <div className="columns is-centered">
                            <div className="column is-half">
                                <div className="field">
                                    <label className="label">Name</label>
                                    <div className="control is-expanded">
                                        <input className="input is-large" name="name" type="text" required="" onChange={this.handleInputChange}/>
                                    </div>
                                </div>
                            </div>
                            <div className="column is-half">
                                <div className="field">
                                    <label className="label">Email</label>
                                    <div className="control is-expanded">
                                        <input className="input is-large" name="email" type="email" required="" onChange={this.handleInputChange}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="columns is-centered">
                            <div className="column">
                                <div className="field">
                                    <label className="label">Message</label>
                                    <div className="control is-expanded">
                                        <textarea className="textarea is-large" name="message" rows="5" required="" onChange={this.handleInputChange}/>
                                    </div>
                                </div>
                                <div className="field is-hidden">
                                    <label className="is-hidden"></label>
                                    <div className="control is-expanded is-hidden">
                                        <input className="is-hidden" name="_gotcha" type="hidden" onChange={this.handleInputChange}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="columns is-centered">
                            <div className="column is-one-third">
                                <div className="field">
                                    <div className="control">
                                        <button className="button is-primary is-outlined is-medium is-fullwidth is-rounded">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        )
    }
}