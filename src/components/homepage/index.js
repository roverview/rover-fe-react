import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { manifestFetchRequest } from '../../actions/rover-manifest-actions.js';

import './_homepage.scss';
import RoverButton from './../rover-button/index.js';
import { Typography } from 'material-ui';

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
    };
    this.setDimensions = this.setDimensions.bind(this);
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

  render() {
    return (
      <div className='homepage'>
        <img
          src='https://raw.githubusercontent.com/roverview/rover-fe-react/master/assets/images/rover-header.jpg' 
          className='rover-img'
        />

        <h2>Select A Rover</h2>

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