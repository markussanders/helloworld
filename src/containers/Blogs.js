import React from 'react';
import oprah from '../photos/oprah-giveaway.gif';
import boatingSchool from '../photos/boating-school.gif';
import developer from '../photos/developer.gif';

const Blogs = props => {


    return (
        <section className="has-text-centered">
            <h2 className="title" id="blogs">my blogs</h2>
            <div className="columns is-multiline blog-columns">
                <div className="column box blog-column">
                    <div className="container blog-image-container">
                        <figure className="image">
                            <img className="blog-image" src={oprah} alt="gif of Oprah during car giveaway" />
                        </figure>
                    </div>
                    <h2 className="subtitle blog-title">rebuilding JavaScript's built-in higher-order functions</h2>
                </div>
                <div className="column box blog-column">
                    <div className="container blog-image-container">
                        <figure className="image">
                            <img className="blog-image" src={developer}  alt="gif of developer working at desk"/>
                        </figure>
                    </div>
                    <h2 className="subtitle blog-title">optimizing your coding process</h2>
                </div>
                <div className="column box blog-column">
                    <div className="container blog-image-container">
                        <figure className="image">
                            <img className="blog-image" src={boatingSchool} alt="gif of Mrs. Puff from Spongebob, 'What I learned in boating school is...'"/>
                        </figure>
                    </div>
                    <h2 className="subtitle blog-title">what i learned in coding school is...</h2>
                </div>
            </div>
        </section>
    )
}

export default Blogs;