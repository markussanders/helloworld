import React from 'react';
import medium from '../images/medium.png';
import linkedin from '../images/linkedin.png';
import github from '../images/github.png';

const Social = props => {
    return (
        <div className="social-icons">
            <a href="https://github.com/markussanders" target="_blank" rel="noopener noreferrer"><img className="social-icon" src={github} alt="logo of github" /></a>
            <a href="https://www.linkedin.com/in/markus-sanders/" target="_blank" rel="noopener noreferrer"><img className="social-icon" src={linkedin} alt="logo of linkedIn" /></a>
            <a href="https://medium.com/@markus.sanderst" target="_blank" rel="noopener noreferrer"><img className="social-icon" src={medium} alt="logo of medium" /></a>
        </div>
    )
}
export default Social;
