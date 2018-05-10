import React, { Component } from 'react';
import { connect } from 'react-redux';
import { camerasFetchRequest } from '../../actions/rover-actions.js';

class RoverSelectForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cameras: [],
    };
  }

  componentDidMount() {
    this.props.camerasFetch(this.props.rover, this.props.startDate)
      .then(res => {
        return this.setState({
          cameras: this.props.roverCameras,
        });
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

  render() {
    return (
      <div className='rover-select-form'>
        <select>
          {this.state.cameras.length > 0 ? 
            this.state.cameras.map(camera => {
              return <option key={camera}>{camera}</option>;
            })
            : <option disabled defaultValue='No available cameras'> No available cameras </option>
          }
        </select>
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  roverCameras: state.roverCameras,
});

let mapDispatchToProps = (dispatch) => ({
  camerasFetch: (rover, date) => dispatch(camerasFetchRequest(rover, date)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RoverSelectForm);