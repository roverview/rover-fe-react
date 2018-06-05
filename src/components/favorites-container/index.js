import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { userFetchRequest } from '../../actions/user-actions.js';

import FavoritesItem from '../favorites-item';
import './_favorites-container.scss';

class FavoritesContainer extends Component {
  render() {
    return (
      <div className='favorites-container'>
        {this.props.user 
          ? this.props.user.photos.length > 0
            ? this.props.user.photos.map(photo => {
              return <FavoritesItem 
                photo={photo} 
                key={photo._id}
              />;
            })
            : <div>
              <p>These aren't the droids you're looking for.</p>
              <p>Save some favorites to view them here!</p>
            </div>
          : null }
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  user: state.user,
});

let mapDispatchToProps = (dispatch) => ({
  userPhotoFetch: user => dispatch(userFetchRequest(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesContainer);