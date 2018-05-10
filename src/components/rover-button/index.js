import React, { Component } from 'react';
import './_rover-button.scss';

export default class RoverButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='rover-button'>
        <h3>{this.props.roverName}</h3>
        <button onClick={this.props.onClick}>
          <img src={this.props.img} />
        </button>
      </div>
    );
  }
}