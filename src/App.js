import React, { Component } from 'react';
import './App.css';
import styled, { keyframes } from 'styled-components'

import { Offline, Online } from 'react-detect-offline'

const common = {
  pleaseDisable: 'Disable your internet connection to continue',
}

const instructions = {
  main: 'Box breathing is a technique used to calm yourself down with a simple 4 second rotation of breathing in, holding your breath, breathing out, holding your breath, and repeating.',
  header: 'instructions',
  one: '1. Inhale for 4 seconds (as the circle expands)',
  two: '2. Hold your breath full for 4 seconds (as the circle stays fully expanded)',
  three: '3. Exhale for 4 seconds (as the circle shrinks)',
  four: '4. Hold your breath empty for 4 seconds (as the circle contracts)'
}

const guide = {
  inhale: 'inhale',
  hold: 'hold',
  exhale: 'exhale',
}

const breathColor = keyframes`
  0% {
    fill: #3cbeb5;
  }

  25% {
    fill: #3cbeb5;
  }
  
  50% {
    fill: #3cbeb5;
  }

  75% {
    fill: #3cbeb5;
  }

  100% {
    fill: #3cbeb5;
  }
`


const breathTransform = keyframes`
  0% {
    transform: scaleX(1), scaleY(1);
  }

  25% {
    transform: scaleX(2), scaleY(2);
  }
  
  50% {
    transform: scaleX(3), scaleY(3);
  }

  75% {
    transform: scaleX(2), scaleY(2);
  }

  100% {
    transform: scaleX(1), scaleY(1);
  }
`

const __breath = styled.circle`
  animation: ${breathTransform}, ${breathColor};
  animation-duration: 16s;
  animation-iteration-count: infinite;
  transform-origin: 50% 50%;
  animation-direction: alternate;
  animation-timing-function: linear;
`

class Instructions extends Component {
  render() {
    return(
      <div className="instructions">
        <p>{instructions.main}</p>
        <h3>{instructions.header}</h3>
        <ul className="instructions--list">
          <li>{instructions.one}</li>
          <li>{instructions.two}</li>
          <li>{instructions.three}</li>
          <li>{instructions.four}</li>
        </ul>
      </div>
    )
  }
}

class OfflineView extends Component {
  render() {
    return(
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-wifi-off">
          <path d="M1 1l22 22M16.72 11.06A10.94 10.94 0 0 1 19 12.55M5 12.55a10.94 10.94 0 0 1 5.17-2.39M10.71 5.05A16 16 0 0 1 22.58 9M1.42 9a15.91 15.91 0 0 1 4.7-2.88M8.53 16.11a6 6 0 0 1 6.95 0M12 20"/>
        </svg>
        <h4>{common.pleaseDisable}</h4>
      </div>
    )
  }
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isInstructions: false,
    }
  }

  toggleInstructions = () => {
    this.setState({ isInstructions: !this.state.isInstructions })
  }

  render() {
    return (
      <div className="App">
        <Online>
          <div className="breath">
            <div className="breath--svgs">
              <svg height="200" width="200">
                <__breath cx="50%" cy="50%" r="46" />
                <circle cx="100" cy="100" r="104" stroke="#979797" stroke-width="4" fill="none" />
              </svg>
            </div>
            <button onClick={this.toggleInstructions}>
              { this.state.isInstructions ? 'x' : '?' }
            </button>
            {this.state.isInstructions ? <Instructions /> : <div></div>}
          </div>
        </Online>
        <Offline>
          <OfflineView />
        </Offline>
      </div>
    );
  }
}

export default App;
