import React, { Component } from 'react';
import { connect } from 'react-redux';
import { manifestFetchRequest } from '../../actions/rover-actions.js';

import './_homepage.scss';

import RoverButton from './../rover-button/index.js';

class Homepage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='homepage'>
        <img 
          src='./../../assets/images/rover-mars2020.jpg' 
          className='rover-img'
        />

        <RoverButton
          roverName='Curiosity'
          img='http://www.roverview.net/images/curiosity.jpg'
        />
        
        <RoverButton
          roverName='Opportunity'
          img='http://www.roverview.net/images/rover2_400%20(1).jpg'
          onClick={() => this.props.manifestFetch('opportunity')}
        />
      </div>
    );
  }
}

let mapDispatchToProps = (dispatch) => ({
  manifestFetch: (rover) => dispatch(manifestFetchRequest(rover)),
});

export default connect(null, mapDispatchToProps)(Homepage);