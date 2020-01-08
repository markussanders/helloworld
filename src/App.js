import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import Head from './containers/Head';
import Bio from './components/Bio';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render(){
    return (
      <div>
        <Head />
        <Bio />
      </div>
    )
  }
}