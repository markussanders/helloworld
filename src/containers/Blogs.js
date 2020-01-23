import React from 'react';
import oprah from '../photos/oprah-giveaway.gif';
import boatingSchool from '../photos/boating-school.gif';
import developer from '../photos/developer.gif';

const Blogs = props => {

    const rebuildingLink = "https://medium.com/@markus.sanderst/rebuilding-javascripts-built-in-higher-order-functions-36e9963af7c6?source=friends_link&sk=4833fe78866897dea708ffa6525ca7c4";
    const optimizingLink = "https://medium.com/@markus.sanderst/optimizing-your-coding-process-b61366e6425c?source=friends_link&sk=ee384de986b7b623c2c4089d774e6574";
    const learnedLink = "https://medium.com/@markus.sanderst/what-i-learned-in-coding-school-is-b0f742d62a05?source=friends_link&sk=7b1730922a70f295a62356308b77815c";
    
    return (
        <section className="has-text-centered">
            <div className="divider"></div>
            <h2 className="title">my blogs</h2>
            <div className="tile is-parent blog-columns">
                <div className="tile is-child box blog-column">
                    <a href={rebuildingLink} target="_blank" rel="noopener noreferrer">
                        <div className="container blog-image-container">
                            <figure className="image">
                                <img className="blog-image" src={oprah} alt="gif of Oprah during car giveaway" />
                            </figure>
                        </div>
                        <div className="blog-title-container">
                            <h2 className="subtitle blog-title">rebuilding JavaScript's built-in higher-order functions</h2>
                        </div>
                    </a>
                </div>
                <div className="tile is-child box blog-column">
                    <a href={optimizingLink} target="_blank" rel="noopener noreferrer">
                        <div className="container blog-image-container">
                            <figure className="image">
                                <img className="blog-image" src={developer}  alt="gif of developer working at desk"/>
                            </figure>
                        </div>
                        <div className="blog-title-container">
                            <h2 className="subtitle blog-title">optimizing your coding process</h2>
                        </div>
                    </a>
                </div>
                <div className="tile is-child box blog-column">
                    <a href={learnedLink} target="_blank" rel="noopener noreferrer">
                        <div className="container blog-image-container">
                            <figure className="image">
                                <img className="blog-image" src={boatingSchool} alt="gif of Mrs. Puff from Spongebob, 'What I learned in boating school is...'"/>
                            </figure>
                        </div>
                        <div className="blog-title-container">
                            <h2 className="subtitle blog-title">what i learned in coding school is...</h2>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Blogs;