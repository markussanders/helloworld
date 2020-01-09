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

    handleFormSubmit = event => {

        event.preventDefault();
        if (this.state.gotcha) return undefined;

        const template_params = {
          from_email: this.state.email,
          reply_to: this.state.email,
          from_name: this.state.name,
          to_name: "Markus",
          message_html: this.state.message
        };

        const service_id = "default_service";
        const template_id = "template_3ySvp44L";
        window.emailjs
          .send(service_id, template_id, template_params)
          .then(res => {
            console.log("Email successfully sent!");
          })
          .catch(err => {
            console.error(
                "Failed to send that message. Here some thoughts on the error that occured:",
                err
            )
            this.handleFormSubmitError();
          }
          );
    }

    handleFormSubmitError() {
        localStorage.setItem('form_content', JSON.stringify(this.state));
        this.launchDefaultMailer();
    }

    launchDefaultMailer() {
        const formInfo = JSON.parse(localStorage.getItem("form_content"));
        const toEmail = "markus.sanderst@gmail.com";
        const subject = `Let's%20connect!%20––${formInfo.name}`;
        const body = this.formatSpacing(formInfo.message);
        window.location.href = this.composeMailer(toEmail, subject, body);
    }

    composeMailer = (toEmail, subject, body) => {
        return `mailto:${toEmail}?subject=${subject}&body=${body}`;
    }

    formatSpacing = str => {
        return str.split(' ').join('%20');
    }

    render() {
        return (
            <section className="is-white">
                <div className="container">     
                    <form id="form" accept-charset="UTF-8" onSubmit={this.handleFormSubmit}>
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