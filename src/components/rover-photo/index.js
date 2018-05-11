import React, { Component } from 'react';
import { connect } from 'react-redux';

import MdNavigateNext from 'react-icons/lib/md/navigate-next';
import MdNavigateBefore from 'react-icons/lib/md/navigate-before';
import './_rover-photo.scss';

export default class RoverPhoto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      currentPhoto: '',
      index: 0,
    };
    this.clickForward = this.clickForward.bind(this);
    this.clickBackward = this.clickBackward.bind(this);
  }
  
  componentWillReceiveProps(nextProps) {
    if (this.props.photos !== nextProps.photos) {
      if (nextProps.photos.length !== 0) {
        this.setState({
          photos: nextProps.photos,
          currentPhoto: nextProps.photos[0],
          index: 0,
        });
      }
    }
  }

  clickForward() {
    this.setState({
      currentPhoto: this.state.photos[this.state.index + 1],
      index: this.state.index++,
    });
    console.log(this.state)

  }

  clickBackward() {
    console.log(this.state)
    this.setState({
      currentPhoto: this.state.photos[this.state.index - 1],
      index: this.state.index-- || 0,
    });
    console.log(this.state)

  }

  render() {
    return (
      <div className='rover-photo'>
        {this.state.photos.length > 1
          ? <MdNavigateBefore onClick={this.clickBackward} />
          : null}

        {this.state.photos.length > 0
          ? <img src={this.state.currentPhoto.img_src} />
          : null}

        {this.state.photos.length > 1
          ? <MdNavigateNext onClick={this.clickForward} />
          : null}
      </div>
    );
  }
}