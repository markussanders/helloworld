import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import Head from './containers/Head';
import Bio from './components/Bio';
import Navbar from './components/Navbar';
import Skills from './containers/Skills';
import Contact from './containers/Contact';
import Blogs from './containers/Blogs';
import Projects from './containers/Projects';
import FadeInSection from './containers/FadeInSection';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prevScrollPos: window.pageYOffset,
      visible: null,
      navClass: "navbar-1--hidden is-white"
    }
  }

  handleScroll = () => {
    const { prevScrollPos } = this.state;

    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollPos > currentScrollPos;

    let navClass = visible ? "navbar-1--hidden" : "navbar-1";
      
    this.setState({
      prevScrollPos: currentScrollPos,
      navClass
    })
  };

  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render(){
    return (
      <div className="is-white">
        <Navbar className={this.state.navClass}/>
        <Head />
          <div id="about-me">
            <FadeInSection>
              <Bio />
            </FadeInSection>
          </div>
          <div id="skills">
            <FadeInSection>
              <Skills />
            </FadeInSection>
          </div>
          <div id="blogs">
            <div className="divider"></div>
              <Blogs />
            <div className="divider"></div>
          </div>
          <div id="projects">
            <div className="divider"></div>
              <Projects />
            <div className="divider"></div>
          </div>
          <div id="contact">
            <FadeInSection>
              <Contact />
            </FadeInSection>
          </div>
      </div>
    )
  }
}
