import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
  render() {
    return (
      <nav>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/'>Log In</Link></li>
        <li><Link to='/'>About Us</Link></li>
      </nav>
    );
  }
}