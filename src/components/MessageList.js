import React, { Component } from 'react';
import Message from './Message';
import './MessageList.scss';

class MessageList extends Component {

  render() {
    return (
      <div className="MessageList">
        {this.props.messages.map((message, key) => (
          <Message key={message.messageId} message={message}></Message>
        ))}
      </div>
    );
  }
}

export default MessageList;
