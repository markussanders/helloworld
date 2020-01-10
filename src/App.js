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
      visible: true,
    }
  }

  handleScroll = () => {
    const { prevScrollPos } = this.state;

    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollPos > currentScrollPos;

    this.setState({
      prevScrollPos: currentScrollPos,
      visible
    });
  };

  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render(){
    return (
      <div >
        <Navbar visible={this.state.visible}/>
        <Head />
        <Bio />
        <Skills />
        <Blogs />
        <Contact />
      </div>
    )
  }
}