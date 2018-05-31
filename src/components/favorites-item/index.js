import React, { Component } from 'react';
import { Card, CardMedia, CardActions, CardHeader } from 'material-ui';

import { style } from './favorites-item-style.js';

export default class FavoritesItem extends Component {
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

          {/* <CardActions style={style.actions}>
            {this.state.photos.length > 1 && this.state.index !== 0
              ? <MdNavigateBefore onClick={this.clickBackward} style={style.activeAction} />
              : <MdNavigateBefore style={style.inactiveAction} />} */}

          {/* </CardActions> */}
        </Card>
      </div>
    );
  }
}