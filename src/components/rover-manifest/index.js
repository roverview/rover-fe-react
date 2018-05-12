import React, { Component } from 'react';
import { connect } from 'react-redux';
import { manifestFetchRequest } from '../../actions/rover-manifest-actions.js';

import { style } from './rover-manifest-style.js';
import { Card } from 'material-ui';

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
      <Card style={style.root}>
        <p><span>Name:</span> {this.state.name}</p>
        <p><span>Launch Date:</span> {this.state.launch_date}</p>
        <p><span>Landing Date:</span> {this.state.landing_date}</p>
        <p><span>Days on Mars:</span> {this.state.max_sol}</p>
        <p><span>Last Photo Taken On:</span> {this.state.max_date}</p>
        <p><span>Rover Status:</span> {this.state.status}</p>
      </Card>
    );
  }
}

let mapDispatchToProps = (dispatch) => ({
  manifestFetch: (rover) => dispatch(manifestFetchRequest(rover)),
});

export default connect(null, mapDispatchToProps)(RoverManifest);