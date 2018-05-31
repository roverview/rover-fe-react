import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userPhotoDeleteRequest } from '../../actions/user-actions.js';

import { Card, CardMedia, CardActions, CardHeader } from 'material-ui';
import MdDeleteForever from 'react-icons/lib/md/delete-forever';

import { style } from './favorites-item-style.js';

class FavoritesItem extends Component {
  render() {
    let cardTitle = `${this.props.photo.roverName}: ${this.props.photo.camName}`;

    return (
      <div style={style.root}>
        <Card style={style.root}>
          <CardHeader
            title={cardTitle}
            subheader={new Date(this.props.photo.earthDate).toDateString()}
          />
      
          <Card style={style.media}>
            <img style={style.img} src={this.props.photo.imgSrc} />
          </Card>

          <CardActions style={style.actions}>
            <MdDeleteForever 
              style={style.activeAction} 
              onClick={() => this.props.userPhotoDelete(this.props.photo)}
            />
          </CardActions>
        </Card>
      </div>
    );
  }
}

let mapDispatchToProps = (dispatch) => ({
  userPhotoDelete: (photo) => dispatch(userPhotoDeleteRequest(photo)),
});

export default connect(null, mapDispatchToProps)(FavoritesItem);