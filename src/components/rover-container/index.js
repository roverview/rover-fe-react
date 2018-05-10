import React, { Component } from 'react';
import { connect } from 'react-redux';

import RoverForm from './../rover-form';
import RoverManifest from './../rover-manifest';

class RoverContainer extends Component {
  render() {
    return (
      <div className='rover-container'>
        <RoverForm rover={this.props.match.params.roverId} />
        <RoverManifest rover={this.props.match.params.roverId} />
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  roverManifest: state.roverManifest,
});

export default connect(mapStateToProps, null)(RoverContainer);