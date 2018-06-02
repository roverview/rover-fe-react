import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { manifestFetchRequest } from '../../actions/rover-manifest-actions.js';

import RoverButton from './../rover-button/index.js';

import { Typography } from 'material-ui';
import './_homepage.scss';

class Homepage extends Component {
  render() {
    return (
      <div className='homepage'>
        <img
          src='https://raw.githubusercontent.com/roverview/rover-fe-react/master/assets/images/rover-header.jpg' 
          className='rover-img'
        />

        <Typography variant='headline' style={{ color: '#FFF', marginTop: 10 }}>Select A Rover</Typography>

        <RoverButton
          roverName='Curiosity'
          img='https://raw.githubusercontent.com/roverview/rover-fe-react/master/assets/images/curiosity-sq.jpg'
          onClick={() => this.props.manifestFetch('curiosity')}
          link='/rover/curiosity'
          id='rover1'
        />
        
        <RoverButton
          roverName='Opportunity'
          img='https://raw.githubusercontent.com/roverview/rover-fe-react/master/assets/images/curiosity-sq.jpg'
          onClick={() => this.props.manifestFetch('opportunity')}
          link='/rover/opportunity'
          id='rover2'
        />
      </div>
    );
  }
}

let mapDispatchToProps = (dispatch) => ({
  manifestFetch: (rover) => dispatch(manifestFetchRequest(rover)),
});

export default connect(null, mapDispatchToProps)(Homepage);