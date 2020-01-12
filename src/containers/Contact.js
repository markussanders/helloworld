import React from 'react';
import ContactForm from '../components/ContactForm';
import smile from '../photos/markus-smile.jpg';
import HoverPhoto from '../components/HoverPhoto';
import avataaar from '../images/avatar-smile.svg';

const Contact = props => {
    
    return (
        <div className="is-form-page">
            <div className="divider" id="contact"></div>
            <section className="is-white has-text-centered">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-three-quarters">
                            <HoverPhoto avatar={avataaar} photo={smile} />
                            <h2 className="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile has-text-first">
                                like what you see <span className="has-text-complementary">||</span> want to know more ?
                            </h2>
                        </div>
                    </div>
                </div>
            </section>
            <ContactForm />
        </div> 
    )
}

export default Contact;