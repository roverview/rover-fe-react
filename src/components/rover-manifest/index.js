import React, { Component } from 'react';
import { connect } from 'react-redux';
import { manifestFetchRequest } from '../../actions/rover-manifest-actions.js';

import { style } from './rover-manifest-style.js';
import { Card, CardContent } from 'material-ui';
import Typography from 'material-ui/Typography';

const capitalize = word => {
  let splitWord = word.split('');
  let firstLetter = splitWord[0].toUpperCase();
  splitWord.splice(0, 1, firstLetter);
  return splitWord.join('');
};

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
          status: capitalize(res.status),
        })
      );
  }

  render() {
    return (
      <Card style={style.root}>
        <CardContent>
          <Typography variant='display3'>
            <span style={style.span}>Name:</span> {this.state.name}
          </Typography>
          <Typography variant='display3'>
            <span style={style.span}>Launch Date:</span> {this.state.launch_date}
          </Typography>
          <Typography variant='display3'>
            <span style={style.span}>Landing Date:</span> {this.state.landing_date}
          </Typography>
          <Typography variant='display3'>
            <span style={style.span}>Days on Mars:</span> {this.state.max_sol}
          </Typography>
          <Typography variant='display3'>
            <span style={style.span}>Last Photo Taken On:</span> {this.state.max_date}
          </Typography>
          <Typography variant='display3'>
            <span style={style.span}>Rover Status:</span> {this.state.status}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

let mapDispatchToProps = (dispatch) => ({
  manifestFetch: (rover) => dispatch(manifestFetchRequest(rover)),
});

export default connect(null, mapDispatchToProps)(RoverManifest);