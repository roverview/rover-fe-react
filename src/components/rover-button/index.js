import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './_rover-button.scss';

export default class RoverButton extends Component {
  render() {
    return (
      <div className='rover-button' id={this.props.id} >
        <Link to={this.props.link}>
          <div className='rover-button-img'>
            <div className='col-1'></div>
            <div className='col-2'>
              <h3>{this.props.roverName}</h3>
            </div>
            <div className='col-3'></div>
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