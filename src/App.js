import React, { Component } from 'react';
import './App.css';

import MouseTracker from './components/MouseTrakcer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MouseTracker />
      </div>
    );
  }
}

export default App;
