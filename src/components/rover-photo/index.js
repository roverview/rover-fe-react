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
      prevIndex: 0,
      index: 0,
      nextIndex: 0,
      lastPhoto: false,
    };
    this.clickForward = this.clickForward.bind(this);
    this.clickBackward = this.clickBackward.bind(this);
  }
  
  componentWillReceiveProps(nextProps) {
    return this.setState({
      photos: nextProps.photos,
      currentPhoto: nextProps.photos[0],
      index: 0,
      nextIndex: 1,
      lastPhoto: nextProps.photos.length > 1 ? false : true,
    });
  }

  clickForward() {
    let index = this.state.index;
    
    return this.setState({
      currentPhoto: this.state.photos[index + 1],
      prevIndex: index,
      index: index + 1,
      nextIndex: index + 2,
      lastPhoto: this.state.index + 2 === this.state.photos.length ? true : false,
    });
  }

  clickBackward() {
    let index = this.state.index;

    return this.setState({
      currentPhoto: this.state.photos[index - 1],
      prevIndex: index === 0 ? 0 : index - 2,
      index: index === 0 ? 0 : index - 1,
      nextIndex: this.state.index,
      lastPhoto: false,
    });
  }

  render() {
    return (
      <div className='rover-photo'>
        {this.state.photos.length > 1 && this.state.index !== 0
          ? <MdNavigateBefore onClick={this.clickBackward} />
          : null}

        {this.state.photos.length > 0
          ? <img src={this.state.currentPhoto.img_src} />
          : null}

        {this.state.photos.length > 1 && !this.state.lastPhoto
          ? <MdNavigateNext onClick={this.clickForward} />
          : null}
      </div>
    );
  }
}