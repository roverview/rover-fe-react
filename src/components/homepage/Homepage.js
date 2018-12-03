import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { manifestFetchRequest } from '../../actions/rover-manifest-actions.js';

import RoverButton from '../rover-button/index.js';
import { Typography } from 'material-ui';
import './_homepage.scss';

class Homepage extends Component {
  render() {
    const { manifestFetch } = this.props;

    return <div className='homepage'>
      <div className='rover1'>
        <RoverButton
          roverName='Curiosity'
          // img='../../../assets/images/curiosity-selfie.jpg'
          onClick={() => manifestFetch('curiosity')}
          link='/rover/curiosity'
          id='rover1'
          alt='Curiosity Rover'
        />
      </div>

      <div className='headline'>
        <Typography variant='headline' style={{ color: '#FFF' }}>Select A Rover</Typography>
      </div>

      <div className='rover2'>
        {/* <Link to='/rover/opportunity'> */}
        <RoverButton
          roverName='Opportunity'
          // img='../../../assets/images/curiosity-selfie.jpg'
          onClick={() => manifestFetch('opportunity')}
          link='/rover/opportunity'
          id='rover2'
          alt='Opportunity Rover'
        />
      </div>
    </div>;
  }
}

let mapDispatchToProps = (dispatch) => ({
  manifestFetch: (rover) => dispatch(manifestFetchRequest(rover)),
});

export default connect(null, mapDispatchToProps)(Homepage);