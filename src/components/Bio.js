import React from 'react';


const Bio = () => {

    return (
        <div className="content has-text-centered has-space-around" >
            <div className="divider" id="about-me"></div>
            <h4 className="is-large">about me</h4>
            <p className="is-small">
                when i was five years old i had my first ever piano lesson.
                i hated it. it was really hard remembering scales, hand positions
                and learning to read music. <br/>

                every week during my lesson, even though i had practiced for some times hours,
                my instructor would always find something that i could improve on. it was never 
                ending. 
                <br/>
                <strong>i hated music so much that i went on to study it in college.</strong>  
            </p>
            <p className="is-small">
                what i value most from my music education, is the love of and good habits of continuous learning,
                something especially crucial when it comes to my newly found passion: web development. 

                i first noticed the similarties between coding and music when i stumbled upon an 'Intro. to Javascript'
                course on CodeCademy in that each task was composed of subtasks.

                when tackling a new piece, you break down the entire process into smaller and more manageable
                goals, isolating particular phrases in a piece and repeating them until they come naturally. 
                the same is true in software development projects, whether it be from learning a new language,
                or perfecting the syntax of a <em>for loop</em>. 
            </p>
            <p className="is-small">
                after spending some time studying on my own, i attended and completed Flatiron School's Immersive Software Engineering
                bootcamp in Chicago, where i learned what it was like to learn new technologies often, work under strict deadlines and 
                collaborate with others on difficult projects.
            </p>
        </div>
    )
}

export default Bio;