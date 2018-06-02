import React, { Component } from 'react';

import RoverForm from './../rover-form';
import RoverManifest from './../rover-manifest';
import RoverPhoto from './../rover-photo';

import './_rover-container.scss';

export default class RoverContainer extends Component {
  render() {
    return (
      <div className='rover-container'>
        <RoverForm 
          rover={this.props.match.params.roverId} 
          onSubmit={this.props.photosFetch}
        />
        
        <RoverManifest rover={this.props.match.params.roverId} />
      </div>
    );
  }
}