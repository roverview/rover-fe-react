import React, { Component } from 'react';
import { connect } from 'react-redux';

import MdNavigateNext from 'react-icons/lib/md/navigate-next';
import './_rover-photo.scss';

class RoverPhoto extends Component {
  render() {
    return (
      <div className='rover-photo'>
        <MdNavigateNext />
        {this.props.photos.length > 0 ? <img src={this.props.photos[0].img_src} /> : null}
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  photos: state.roverPhotos,
});

export default connect(mapStateToProps, null)(RoverPhoto);