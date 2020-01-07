import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import Info from './containers/Info';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render(){
    return (
      <div>
        <Info />
      </div>
    )
  }
}