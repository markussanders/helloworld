import React from 'react';
import Avatar from 'avataaars';
import ContactForm from '../components/ContactForm';

const Contact = props => {
    return (
        <div className="is-form-page">
            <section className="is-white has-text-centered">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-three-quarters">
                            <Avatar
                                avatarStyle = 'Circle'
                                topType = 'ShortHairTheCaesar'
                                accessoriesType = 'Blank'
                                hairColor = 'Black'
                                facialHairType = 'Blank'
                                clotheType = 'Hoodie'
                                clotheColor = 'PastelOrange'
                                eyeType = 'Happy'
                                eyebrowType = 'FlatNatural'
                                mouthType = 'Smile'
                                skinColor = 'Black' 
                            />
                            <h1 className="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile">
                                thanks for taking the time to reach out!
                            </h1>
                        </div>
                    </div>
                </div>
            </section>
            <ContactForm />
        </div> 
    )
}

export default Contact;