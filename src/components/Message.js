import React, { Component } from 'react';
import './Message.scss';

class Message extends Component {
  
  render() {
    return (
      <div className="Message">
        <p className="mb-0">{this.props.message.content}</p>
      </div>
    );
  }
}

export default Message;
