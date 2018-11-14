import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './_rover-button.scss';

export default class RoverButton extends Component {
  render() {
    const { roverName, id, link, img } = this.props;

    return <Link to={link}>
      {/* <h3>{roverName}</h3> */}
      <img className='button-img' src={img} id={id} />
    </Link>;
    // </div>;
  }
}