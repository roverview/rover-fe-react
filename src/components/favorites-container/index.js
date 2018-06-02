import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { userFetchRequest } from '../../actions/user-actions.js';
import FavoritesItem from '../favorites-item';

class FavoritesContainer extends Component {
  render() {
    return (
      <div>
        {this.props.user 
          ? this.props.user.photos.length > 0
            ? this.props.user.photos.map(photo => {
              return <FavoritesItem 
                photo={photo} 
                key={photo._id}
              />;
            })
            : null
          : null}
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