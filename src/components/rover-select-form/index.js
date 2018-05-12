import React, { Component } from 'react';
import { connect } from 'react-redux';
import { camerasFetchRequest, photosFetchRequest } from '../../actions/rover-actions.js';

import { style } from './rover-select-form-style.js';
import { Button } from 'material-ui';

class RoverSelectForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cameras: [],
      selectedCamera: 'Select a camera',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.camerasFetch(this.props.rover, this.props.startDate)
      .then(res => {
        return this.setState({
          cameras: this.props.roverCameras,
          selectedCamera: this.props.roverCameras[0],
        });
      });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ selectedCamera: '' });
    if (this.props.startDate !== nextProps.startDate) {
      this.setState({ cameras: [], selectedCamera: '' });
      this.props.camerasFetch(this.props.rover, this.props.startDate)
        .then(res => {
          return this.setState({
            cameras: this.props.roverCameras,
            selectedCamera: this.props.roverCameras[0],
          });
        });
    } 
  }

  handleChange(e) {
    this.setState({ selectedCamera: e.target.value });
  }

  handleSubmit() {
    return this.props.photosFetch(this.props.rover, this.props.startDate, this.state.selectedCamera);
  }

  render() {
    return (
      <div className='rover-select-form' style={style.root}>
        <select onChange={this.handleChange} style={style.input}>
          {this.state.cameras.length > 0 ? 
            this.state.cameras.map(camera => 
              <option value={camera} key={camera}>{camera}</option>
            )
            : <option disabled defaultValue='No available cameras'> No available cameras </option>
          }
        </select>

        <Button onClick={this.handleSubmit} style={style.button}>Submit</Button>
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  roverCameras: state.roverCameras,
});

let mapDispatchToProps = (dispatch) => ({
  camerasFetch: (rover, date) => dispatch(camerasFetchRequest(rover, date)),
  photosFetch: (rover, date, camera) => dispatch(photosFetchRequest(rover, date, camera)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RoverSelectForm);