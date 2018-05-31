import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { userPhotoFetchRequest } from '../../actions/user-actions.js';
import FavoritesItem from '../favorites-item';

class FavoritesContainer extends Component {
  componentWillMount() {
    return this.props.userPhotoFetch(this.props.user);
  }

  render() {
    console.log(this.props.user);

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
  userPhotoFetch: user => dispatch(userPhotoFetchRequest(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesContainer);