import React, { Component } from 'react';
import './MessageForm.scss';

class MessageForm extends Component {
  
  postMessage(event, props) {
    event.preventDefault();
    // No need of 2waybinding with +10 lines of codes and constructor override
    const data = new FormData(event.target);
    if (props.onPostMessage) {
      props.onPostMessage(data.get('message'));
    }
    event.target.reset();
  }

  render() {
    return (
      <div className="MessageForm">
        <form onSubmit={(event) => this.postMessage(event, this.props)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Your message"
              name="message"
              required
              disabled={this.props.disabled}>
            </input>
          </div>
        </form>
      </div>
    );
  }
}

export default MessageForm;
