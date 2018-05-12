import React, { Component } from 'react';
import { connect } from 'react-redux';
import { camerasFetchRequest } from '../../actions/rover-actions.js';

import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

import RoverSelectForm from './../rover-select-form';
import { style } from './rover-form-style.js';
import { Card } from 'material-ui';

export default class RoverForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
      startDate: moment().subtract(1, 'days'),
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date,
    });
  }

  render() {
    return (
      <Card style={style.root}>
        <h3>Pick a date to view:</h3>
        <DatePicker
          selected={this.state.startDate}
          onChange={this.handleChange}
        />
        
        <h3>Select a camera:</h3>
        <RoverSelectForm 
          rover={this.props.rover} 
          startDate={moment(this.state.startDate).format('YYYY-MM-DD')}
        />
      </Card>
    );
  }
}