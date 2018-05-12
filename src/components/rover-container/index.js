import React, { Component } from 'react';
import { connect } from 'react-redux';

import RoverForm from './../rover-form';
import RoverManifest from './../rover-manifest';
import RoverPhoto from './../rover-photo';
import { Paper } from 'material-ui';

import { style } from './rover-container-style.js';

export default class RoverContainer extends Component {
  render() {
    return (
      <div style={style.root}>
        <RoverForm 
          rover={this.props.match.params.roverId} 
          onSubmit={this.props.photosFetch}
        />
        
        <RoverManifest rover={this.props.match.params.roverId} />
      </div>
    );
  }
}