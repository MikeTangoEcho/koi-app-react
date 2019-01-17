import React, { Component } from 'react';
import './Map.scss';

class Map extends Component {

  setPlace(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const place = data.get('place');
    if (this.props.onChangePlace) {
      this.props.onChangePlace(place);
      console.log('Changed place', place);
    }
  }

  render() {
    return (
      <div className="Map" id="olMap">
        <form onSubmit={(event) => this.setPlace(event)}>
          <input name="place" type="text" placeholder="Place" required></input>
        </form>
      </div>
    );
  }
}

export default Map;
