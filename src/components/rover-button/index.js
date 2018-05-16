import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './_rover-button.scss';

export default class RoverButton extends Component {
  render() {
    return (
      <div className='rover-button'>
        <Link to={this.props.link}>
          <div className='rover-button-img'>
            <h3>{this.props.roverName}</h3>
            <img src={this.props.img} />
          </div>
        </Link>
      </div>
    );
  }
}