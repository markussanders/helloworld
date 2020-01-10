import React from 'react';

const Navbar = props => {

    return (
        <nav className={!props.visible ? "navbar-1" : "navbar-1--hidden"}>
            <div className="navbar-end">
                <div className="navbar-item">
                    <div className="buttons">
                        <a className="button is-sixth is-rounded is-small is-outlined has-text-first" href="#about-me">about me</a>
                        <a className="button is-sixth is-rounded is-small is-outlined has-text-first" href="#skills">skills</a>
                        <a className="button is-sixth is-rounded is-small is-outlined has-text-first" href="#contact">say hello</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;