import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import ClCamera from './components/ClCamera';
import Notifier from './components/Notifier';
class App extends Component {
  constructor() {
    super();
    this.state = {
      offline: false
    }
  }
  componentDidMount() {
    // set the state wether offline or online
    let offlineStatus = !navigator.onLine;
    this.setState({ offline: offlineStatus });
  }
  render() {
    return (
      <div className="App">
        <Notifier offline={this.state.offline} />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="Cloudinary Logo" />
          <h1 className="App-title">CloudyCam</h1>
        </header>
        <ClCamera offline={this.state.offline}></ClCamera>
      </div>
    );
  }
}

export default App;
