import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import Head from './containers/Head';
import Bio from './components/Bio';
import Navbar from './components/Navbar';
import Skills from './containers/Skills';
import Contact from './containers/Contact';

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
        <Contact />
      </div>
    )
  }
}