import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class FavoritesContainer extends Component {
  render() {
    console.log(this.props.user);

    return (
      <div>
        {this.props.user 
          ? this.props.user.photos.length > 0
            ? <ul>
              {this.props.user.photos.map(photo => {
                {console.log(photo)}
              }
              )}
            </ul>
            : null
          : null}
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, null)(FavoritesContainer);