import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import { Button, MenuItem } from 'material-ui';
import { withStyles } from 'material-ui';
import { grey900 } from 'material-ui/colors/grey';
import { Typography } from 'material-ui';
import MenuIcon from 'react-icons/lib/md/menu';

import { style } from './navbar-style.js';
import { Menu, MenuList } from 'material-ui';
import { Fade } from 'material-ui';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
      anchorEl: null,
    };
    this.setDimensions = this.setDimensions.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentDidMount() {
    this.setDimensions();
    window.addEventListener('resize', this.setDimensions);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.setDimensions);
  }
  
  setDimensions() {
    this.setState({ 
      width: window.innerWidth, 
      height: window.innerHeight,
    });
  }

  handleClick(e) {
    this.setState({ anchorEl: e.currentTarget });
  };

  handleClose() {
    this.setState({ anchorEl: null });
  };

  render() {
    return (
      <AppBar position='static' style={style.root}>
        <Toolbar>
          <Typography style={style.title} variant='display1'>
              RoverView
          </Typography>

          {this.state.width > 550
            ? <div>
              <Link to='/'>
                <Button style={style.button}>
                  Home
                </Button>
              </Link>
              {this.props.token
                ? <Link to='/favorites'>
                  <Button style={style.button}>
                    Favorites
                  </Button>
                </Link>
                : <Link to='/signup'>
                  <Button style={style.button}>
                    Sign Up
                  </Button>
                </Link>
              }
              <Link to='/about'>
                <Button style={style.button}>
                  About Us
                </Button>
              </Link>
            </div>
            : <div>
              <MenuIcon 
                aria-owns={this.state.anchorEl ? 'simple-menu' : null}
                aria-haspopup='true'
                style={style.menu} 
                onClick={this.handleClick}
              />

              <Menu
                id='simple-menu'
                anchorEl={this.state.anchorEl}
                open={Boolean(this.state.anchorEl)}
                onClose={this.handleClose}
              >
                <Link to='/'>
                  <MenuItem>Home</MenuItem>
                </Link>
                {this.props.token
                  ? <Link to='/Favorites'>
                    <MenuItem>Favorites</MenuItem>
                  </Link>
                  : <Link to='/signup'>
                    <MenuItem>Sign Up</MenuItem>
                  </Link>
                }
                <Link to='/about'>
                  <MenuItem>About Us</MenuItem>
                </Link>
              </Menu>
            </div>}
        </Toolbar>
      </AppBar>
    );
  }
}

let mapStateToProps = (state) => ({
  token: state.token,
});

export default connect(mapStateToProps, null)(NavBar);