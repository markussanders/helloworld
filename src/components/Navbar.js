import React from 'react';
import logo from '../images/code-ms-logo.png';

const Navbar = props => {

    return (
        <nav className={props.className} role="navigation">
            <img className="logo" src={logo} alt="logo"/>
            <div className="navbar-end">
                <div className="navbar-item">
                    <div className="buttons">
                        <a className="button is-rounded is-small has-text-first" href="#about-me">about me</a>
                        <a className="button is-rounded is-small has-text-first" href="#skills">skills</a>
                        <a className="button is-rounded is-small has-text-first" href="#blogs">blogs</a>
                        <a className="button is-rounded is-small has-text-first" href="#contact">say hello</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;