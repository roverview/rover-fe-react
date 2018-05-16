import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import { Button } from 'material-ui';
import { withStyles } from 'material-ui';
import { grey900 } from 'material-ui/colors/grey';
import { Typography } from 'material-ui';

import { style } from './navbar-style.js';

export default class NavBar extends Component {
  render() {
    const { classes } = this.props;

    return (
      <AppBar position='static' style={style.root}>
        <Toolbar>
          <Typography style={style.title} variant='display1'>
            RoverView
          </Typography>
          <Link to='/'>
            <Button style={style.button}>
              Home
            </Button>
          </Link>
          <Link to='/about'>
            <Button style={style.button}>
              About Us
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    );
  }
}