import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import Head from './containers/Head';
import Bio from './components/Bio';
import Navbar from './components/Navbar';

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
      </div>
    )
  }
}