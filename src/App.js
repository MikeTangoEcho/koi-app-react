import React, { Component } from 'react';
import './App.scss';
import Chat from './components/Chat';

import apiFactory from './lib/apiFactory';

class App extends Component {
  // Auth user
  // Inject user as props
  state = {
    'apiClient': undefined
  }

  componentDidMount() {
    this.setState({
      'apiClient': apiFactory({
        baseURL: process.env.REACT_APP_API_BASE_URL
      })
    })
  }

  render() {
    return (
      <div className="App">
        <div className="Main">
          <Chat apiClient={this.state.apiClient}></Chat>
        </div>
      </div>
    );
  }
}

export default App;
