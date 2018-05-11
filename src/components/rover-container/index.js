import React, { Component } from 'react';
import { connect } from 'react-redux';

import RoverForm from './../rover-form';
import RoverManifest from './../rover-manifest';
import RoverPhoto from './../rover-photo';

export default class RoverContainer extends Component {
  render() {
    return (
      <div className='rover-container'>
        <RoverForm 
          rover={this.props.match.params.roverId} 
          onSubmit={this.props.photosFetch}
        />
        
        <RoverPhoto />

        <RoverManifest 
          rover={this.props.match.params.roverId} 
        />
      </div>
    );
  }
}