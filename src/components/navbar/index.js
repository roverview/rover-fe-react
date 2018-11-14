import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { tokenDelete } from '../../actions/auth-actions.js';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import { grey900 } from 'material-ui/colors/grey';
import { BottomNavigation } from 'material-ui';

import MdPowerSettingsNew from 'react-icons/lib/md/power-settings-new';
import MdFavoriteBorder from 'react-icons/lib/md/favorite-border';
import MdHome from 'react-icons/lib/md/home';

// import { style } from './navbar-style.js';
import './_navbar-style.scss';
import { BottomNavigationAction } from 'material-ui';

const style = {
  bottomNav: {
    background: '#e2e2e2',
  },
};

class BottomNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
      anchorEl: null,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleClick(e) {
    this.setState({ anchorEl: e.currentTarget });
  };

  handleClose() {
    this.setState({ anchorEl: null });
  };

  handleLogout() {
    this.props.tokenDelete();
    return this.props.history.push('/');
  }

  render() {
    return <BottomNavigation showLabels style={style.bottomNav}>
      <BottomNavigationAction label='Home' icon={<MdHome />} />

      {this.props.token
        ? <Fragment>
          <BottomNavigationAction label='Favorites' icon={<MdPowerSettingsNew />} />
          <BottomNavigationAction label='Sign Out' icon={<MdPowerSettingsNew />} />
        </Fragment>
        : <BottomNavigationAction label='Log In' icon={<MdFavoriteBorder />} />}
    </BottomNavigation>;
    //     {this.state.width > 700
    //       ? <div>
    //         <Link to='/'>
    //           <Button style={style.button}>
    //             Home
    //           </Button>
    //         </Link>
    //         {this.props.token
    //           ? <Link to='/favorites'>
    //             <Button style={style.button}>
    //               Favorites
    //             </Button>
    //           </Link>
    //           : <Link to='/signup'>
    //             <Button style={style.button}>
    //               Sign Up
    //             </Button>
    //           </Link>
    //         }
    //         {/* <Link to='/about'>
    //           <Button style={style.button}>
    //             About Us
    //           </Button>
    //         </Link> */}
    //         {this.props.token
    //           ? <Button onClick={this.handleLogout} style={style.button}>
    //             {/* <MdPowerSettingsNew /> */}
    //             Logout
    //           </Button>
    //           : null
    //         }
    //       </div>
    //       : <div>
    //         <MenuIcon 
    //           aria-owns={this.state.anchorEl ? 'simple-menu' : null}
    //           aria-haspopup='true'
    //           style={style.menu} 
    //           onClick={this.handleClick}
    //         />

    //         <Menu
    //           id='simple-menu'
    //           anchorEl={this.state.anchorEl}
    //           open={Boolean(this.state.anchorEl)}
    //           onClose={this.handleClose}
    //         >
    //           <Link to='/'>
    //             <MenuItem>Home</MenuItem>
    //           </Link>
    //           {this.props.token
    //             ? <Link to='/favorites'>
    //               <MenuItem>Favorites</MenuItem>
    //             </Link>
    //             : <Link to='/signup'>
    //               <MenuItem>Sign Up</MenuItem>
    //             </Link>
    //           }
    //           <Link to='/about'>
    //             <MenuItem>About Us</MenuItem>
    //           </Link>
    //           {this.props.token
    //             ? <MenuItem onClick={this.handleLogout}>Logout</MenuItem>
    //             : null
    //           }
    //         </Menu>
    //       </div>}
    //   </Toolbar>
    // </AppBar>
  }
}

let mapStateToProps = (state) => ({
  token: state.token,
});

let mapDispatchToProps = (dispatch) => ({
  tokenDelete: () => dispatch(tokenDelete()),
});

export default connect(mapStateToProps, mapDispatchToProps)(BottomNav);