import React, { Component } from 'react';
import Layout from "./components/Layout"
import {BrowserRouter as Router} from 'react-router-dom'
import helpers from './js/helpers'

class App extends Component {
  state = {
    data: null,
  };

  canvasStyle = {
    width: '100vw',
    height: '100vh'
  }

  componentDidMount() {
    helpers.cursor('.button--nav', '.link', 'rgba(255, 0, 0, .5)', 100, 100)
  }

  render() {
    return (
      <Router>
        <Layout className="App"/>

        <div className="cursor cursor--small" />
        <canvas className="cursor cursor--canvas" style={this.canvasStyle} />
      </Router>
    );
  }
}

export default App;
