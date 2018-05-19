import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './_rover-button.scss';

export default class RoverButton extends Component {
  render() {
    return (
      <div className='rover-button' id={this.props.id} >
        <Link to={this.props.link}>
          <div className='rover-button-img'>
            <div class='col-1'></div>
            <div class='col-2'>
              <h3>{this.props.roverName}</h3>
            </div>
            <div class='col-3'></div>
            <img 
              className='button-img' 
              src={this.props.img} 
              id={this.props.id} 
            />
          </div>
        </Link>
      </div>
    );
  }
}