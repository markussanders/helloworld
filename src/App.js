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

    }
  }

  render(){
    return (
      <div>
        <Navbar />
        <Head />
        <Bio />
        <Skills />
        <Blogs />
        <Contact />
      </div>
    )
  }
}