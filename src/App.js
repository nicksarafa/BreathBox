import React, { Component } from 'react';
import './App.css';

import { Offline, Online } from 'react-detect-offline'

const common = {
  pleaseDisable: 'Disable your internet connection to continue',
  instructions: 'Box breathing is a technique used to calm yourself down with a simple 4 second rotation of breathing in, holding your breath, breathing out, holding your breath, and repeating.',
}

const steps = {
  one: '1. Inhale for 4 seconds (as the circle expands)',
  two: '2. Hold your lungs full for 4 seconds (as the circle stays fully expanded)',
  three: '3. Exhale for 4 seconds (as the circle shrinks)',
  four: 'Hold your lungs empty for 4 seconds (as the circle is contracted)'
}

class Instructions extends Component {
  render() {
    return(
      <h3>
        {common.instructions}
      </h3>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Online>
          <Instructions />
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-wifi-off">
            <path d="M1 1l22 22M16.72 11.06A10.94 10.94 0 0 1 19 12.55M5 12.55a10.94 10.94 0 0 1 5.17-2.39M10.71 5.05A16 16 0 0 1 22.58 9M1.42 9a15.91 15.91 0 0 1 4.7-2.88M8.53 16.11a6 6 0 0 1 6.95 0M12 20"/>
          </svg>
          <h3>
          </h3>
        </Online>
        <Offline>
        </Offline>
      </div>
    );
  }
}

export default App;
