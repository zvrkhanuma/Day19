// src/index.js
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// add the following code below this line

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello, Padawans!</h1>
      </div>
    )
  }
}
// add  the following code below this line
ReactDOM.render(<App />, document.getElementById('root'));