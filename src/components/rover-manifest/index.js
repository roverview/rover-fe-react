import React, { Component } from 'react';
import { connect } from 'react-redux';
import { manifestFetchRequest } from '../../actions/rover-manifest-actions.js';

class RoverManifest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      launch_date: '',
      landing_date: '',
      max_date: '',
      max_sol: '',
      name: '',
      status: '',
    };
  }

  componentDidMount() {
    this.props.manifestFetch(this.props.rover)
      .then(res => 
        this.setState({
          launch_date: new Date(res.landing_date).toDateString(),
          landing_date: new Date(res.landing_date).toDateString(),
          max_date: new Date(res.max_date).toDateString(),
          max_sol: res.max_sol,
          name: res.name,
          status: res.status,
        })
      );
  }

  render() {
    return (
      <div className='rover-manifest'>
        <p>Name: {this.state.name}</p>
        <p>Launch Date: {this.state.launch_date}</p>
        <p>Landing Date: {this.state.landing_date}</p>
        <p>Days on Mars: {this.state.max_sol}</p>
        <p>Last Photo Taken On: {this.state.max_date}</p>
        <p>Rover Status: {this.state.status}</p>
      </div>
    );
  }
}

let mapDispatchToProps = (dispatch) => ({
  manifestFetch: (rover) => dispatch(manifestFetchRequest(rover)),
});

export default connect(null, mapDispatchToProps)(RoverManifest);