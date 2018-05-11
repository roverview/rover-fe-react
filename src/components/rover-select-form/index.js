import React, { Component } from 'react';
import { connect } from 'react-redux';
import { camerasFetchRequest, photosFetchRequest } from '../../actions/rover-actions.js';

class RoverSelectForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cameras: [],
      selectedCamera: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.camerasFetch(this.props.rover, this.props.startDate)
      .then(res => {
        return this.setState({
          cameras: this.props.roverCameras,
        });
      })
      .then(() => {
        if (this.props.roverCameras.length > 0) {
          return this.setState({
            selectedCamera: this.state.cameras[0],
          });
        }
      });
  }

  componentWillReceiveProps(nextProps) {
    this.props.startDate !== nextProps.startDate
      ? this.props.camerasFetch(this.props.rover, this.props.startDate)
        .then(res => {
          return this.setState({
            cameras: this.props.roverCameras,
          });
        })
      : null;
  }

  handleChange(e) {
    this.setState({ selectedCamera: e.target.value });
  }

  render() {
    return (
      <div className='rover-select-form'>
        <select onChange={this.handleChange}>
          {this.state.cameras.length > 0 ? 
            this.state.cameras.map(camera => 
              <option value={camera} key={camera}>{camera}</option>
            )
            : <option disabled defaultValue='No available cameras'> No available cameras </option>
          }
        </select>

        <button onClick={() => this.props.photosFetch(this.props.rover, this.props.startDate, this.state.selectedCamera)}>Submit</button>
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