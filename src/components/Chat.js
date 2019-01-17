import React, { Component } from 'react';
import Map from './Map';
import MessageList from './MessageList';
import MessageForm from './MessageForm';
import './Chat.scss';

class Chat extends Component {
  state = {
    messages: [],
    place: '',
    sendingMessage: false
  }
  
  // shouldComponentUpdate(nextProps, nextStates) {
  //   // TODO Check Timer to retreive last messages
  //   return this.state.location != nextStates.location;
  // }

  componentDidUpdate(prevProps, prevStates) {
    if (this.state.place !== prevStates.place) {
      // Retreive last messages
      this.loadMessagesByPlace();
    }
  }

  loadMessagesByPlace() {
    if (this.props.apiClient && this.state.place) {
      this.props.apiClient.getMessages(this.state.place)
      .then(response => {
        this.setState((state, props) => ({
          messages: [...response.data.items]
        }));
      })
      .catch((e) => console.log(e))
      ;
    }
  }

  appendMessagesByPlace() {
    // Load messages after date and append them
    this.loadMessagesByPlace();
  }

  // Change Chat with location update
  setPlace(newPlace) {
    this.setState((state, props) => ({
      place: newPlace
    }));
  }

  addMessage(message) {
    this.setState({
      sendingMessage: true
    });
    this.props.apiClient.addMessage(this.state.place, message)
      .then(response => {
        this.appendMessagesByPlace();
      })
      .catch(err => console.log(err))
      .finally(() => {
        this.setState({
          sendingMessage: false
        });
      });
  }

  render() {
    return (
      <div className="Chat">
        <Map onChangePlace={(newPlace) => this.setPlace(newPlace)}></Map>
        <MessageList messages={this.state.messages}></MessageList>
        <MessageForm disabled={this.state.sendingMessage || this.state.place === ''}
          onPostMessage={(message) => this.addMessage(message)}></MessageForm>
      </div>
    );
  }
}

export default Chat;
