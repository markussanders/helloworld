import React from 'react';


const Bio = () => {

    return (
        <div className="content has-text-centered has-space-around" >
            <div className="divider"></div>
            <h2 className="title has-text-fifth">about me</h2>
            <p className="is-small">
                as a music major in college, i had to take four years of music theory
                courses.
                <br/>
                while many might say that was one of their least favorable
                parts <em>(second only to medieval music history)</em>, for me it was the opposite.
                <br/>
                i say this because breaking a piece down, analyzing its individual parts and seeing how 
                it all fits together is almost compulsive for me. with that said, it comes as no surprise as 
                to when i was introduced to web development why it stuck so well.  
                <br/>
                after spending time on my own studying and building projects with my friends and colleagues, 
                i attended Flatiron School's Software Engineering program where i learned new technologies
                and worked with others developers on full stack applications.
            </p>
        </div>
    )
}

export default Bio;