import React, { Component } from 'react';
import { connect } from 'react-redux';

import RoverForm from './../rover-form';
import RoverManifest from './../rover-manifest';
import RoverPhoto from './../rover-photo';

class RoverContainer extends Component {
  render() {
    return (
      <div className='rover-container'>
        <RoverForm 
          rover={this.props.match.params.roverId} 
          onSubmit={this.props.photosFetch}
        />
        
        <RoverPhoto 
          photos={this.props.photos} 
        />

        <RoverManifest 
          rover={this.props.match.params.roverId} 
        />
      </div>
    );
  }
}


let mapStateToProps = (state) => ({
  photos: state.roverPhotos,
});

export default connect(mapStateToProps, null)(RoverContainer);