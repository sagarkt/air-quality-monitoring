import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'

export default class Home extends Component {
  render() {
    return(
      <Jumbotron>
        <h1>Air Quality Index Monioring</h1>
        <p>View City wise AQI</p>
      </Jumbotron>
    )
  }
}
