import React from 'react';

const Navbar = props => {

    return (
        <nav className="navbar is-transparent is-fixed-top">
            <div className="navbar-end">
                <div className="navbar-item">
                    <div className="buttons">
                        <a className="button is-light is-rounded is-small is-outlined has-text-primary" href="#about-me">about me</a>
                        <a className="button is-light is-rounded is-small is-outlined has-text-primary" href="#skills">skills</a>
                        <a className="button is-light is-rounded is-small is-outlined has-text-primary" href="#contact">say hello</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;