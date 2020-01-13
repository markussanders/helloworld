import React, { Component } from 'react';
import SubmissionStatus from './SubmissionStatus';

export default class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            gotcha: false,
            clickedSubmit: false,
            isSubmitted: false,
            submissionSuccess: null,
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

    validInput = () => {
        return (
            this.state.name.length > 0 &&
            this.state.email.length > 0 &&
            this.state.message.length > 0
        )
    }

    handleFormSubmit = event => {
        event.preventDefault();
        
        if (this.state.gotcha) return undefined;
        if (!this.validInput()) {
            alert('Fields cannot be empty. Please enter valid text.');
            return undefined;
        }

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
            this.setState({ 
                isSubmitted: true, 
                submissionSuccess: true,
            });
            console.log("Email successfully sent!");
          })
          .catch(err => {
            this.handleFormSubmitError();
            console.error(
                "Failed to send that message. Here some thoughts on the error that occured:",
                err
            )
          }
          );
    }

    handleFormSubmitError = () => {
        localStorage.setItem('form_content', JSON.stringify(this.state));
        this.setState({ isSubmitted: true, submissionSuccess: false });
    }

    launchDefaultMailer = () => {
        const formInfo = JSON.parse(localStorage.getItem("form_content"));
        const toEmail = "markus.sanderst@gmail.com";
        const subject = `Let's%20connect!%20––${formInfo.name}`;
        const body = this.formatSpacing(formInfo.message);
        window.location.href = this.composeMailer(toEmail, subject, body);
        localStorage.removeItem('form_content');
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
                    <form id="form" acceptCharset="UTF-8" onSubmit={this.handleFormSubmit}>
                        <div className="columns is-centered">
                            <div className="column is-half">
                                <div className="field">
                                    <label className="label">name</label>
                                    <div className="control is-expanded">
                                        <input className="input is-large" name="name" type="text" required onChange={this.handleInputChange}/>
                                    </div>
                                </div>
                            </div>
                            <div className="column is-half">
                                <div className="field">
                                    <label className="label">email</label>
                                    <div className="control is-expanded">
                                        <input className="input is-large" name="email" type="email" required onChange={this.handleInputChange}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="columns is-centered">
                            <div className="column">
                                <div className="field">
                                    <label className="label">message</label>
                                    <div className="control is-expanded">
                                        <textarea className="textarea is-large" name="message" rows="5" required onChange={this.handleInputChange}/>
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
                                        {this.state.isSubmitted ?
                                            <button className="button is-first is-outlined is-medium is-fullwidth is-rounded" disabled>submitted</button>
                                            :
                                            <button className="button is-first is-outlined is-medium is-fullwidth is-rounded">
                                                submit
                                            </button>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                {
                    this.state.isSubmitted ? 

                    <SubmissionStatus 
                        isSubmitted = {
                            this.state.isSubmitted
                        }
                        status = {
                            this.state.submissionSuccess
                        }
                        launchDefaultMailer = {
                            this.launchDefaultMailer
                        }
                        clearForm = {
                            this.clearForm
                        }
                    /> : null}
            </section>
        )
    }
}