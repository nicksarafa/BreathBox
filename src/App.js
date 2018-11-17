import React, { Component } from 'react';
import './App.css';

import { Offline, Online } from 'react-detect-offline'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Online>Online</Online>
        <Offline>Offline</Offline>
      </div>
    );
  }
}

export default App;
