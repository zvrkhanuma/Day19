// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// add the following code below this line

class App extends React.Component {
  render() {
    // Change code below this line
    const world = "World";
    // Change code above this line
    return ( 
      <div className="App">
        <h1>Hello, { world}!</h1>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));