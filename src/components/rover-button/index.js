import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './_rover-button.scss';

export default class RoverButton extends Component {
  render() {
    return (
      <div className='rover-button'>
        <h3>{this.props.roverName}</h3>
        <Link to={this.props.link}>
          <img src={this.props.img} />
        </Link>
      </div>
    );
  }
}