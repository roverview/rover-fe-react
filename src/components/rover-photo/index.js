import React, { Component } from 'react';
import { connect } from 'react-redux';

class RoverPhoto extends Component {
  render() {
    return (
      <div className='rover-photo'>
        {this.props.photos.length > 0 ? <img src={this.props.photos[0].img_src} /> : null}
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  photos: state.roverPhotos,
});

// let mapDispatchToProps = (dispatch) => ({
//   photosFetch: (rover, date) => dispatch(photosFetchRequest(rover, date)),
// });

export default connect(mapStateToProps, null)(RoverPhoto);