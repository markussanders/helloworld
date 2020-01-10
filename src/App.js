import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import Head from './containers/Head';
import Bio from './components/Bio';
import Navbar from './components/Navbar';
import Skills from './containers/Skills';
import Contact from './containers/Contact';
import Blogs from './containers/Blogs';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prevScrollPos: window.pageYOffset,
      visible: null,
      navClass: "navbar-1--hidden is-fourth"
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
        <br />
        <Bio />
        <br />
        <Skills />
        <br />
        <Blogs />
        <br />
        <Contact />
      </div>
    )
  }
}