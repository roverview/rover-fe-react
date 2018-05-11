import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { photosFetchRequest } from '../../actions/rover-actions.js';

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
        <RoverManifest 
          rover={this.props.match.params.roverId} 
        />
        <RoverPhoto />
      </div>
    );
  }
}

// let mapStateToProps = (state) => ({
//   roverManifest: state.roverManifest,
// });

// let mapDispatchToProps = (dispatch) => ({
//   photosFetch: (rover, date) => dispatch(photosFetchRequest(rover, date)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(RoverContainer);