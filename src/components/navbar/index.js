import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import { Button } from 'material-ui';
import { withStyles } from 'material-ui';
import { grey900 } from 'material-ui/colors/grey';
import { Typography } from 'material-ui';

import Homepage from '../homepage';

const style = {
  root: {
    flexGrow: 1,
    background: '#000',
    boxShadow: 'none',
  },
  title: {
    flex: 1,
    color: '#FFF',
  },
  button: {
    color: '#FFF',
  },
};

export default class NavBar extends Component {
  render() {
    const { classes } = this.props;

    return (
      <AppBar position='static' style={style.root}>
        <Toolbar>
          <Typography style={style.title}>
            Title
          </Typography>
          <Link to='/'>
            <Button style={style.button}>
              Home
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    );
  }
}