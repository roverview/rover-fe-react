import React, { Component } from 'react';
import { connect } from 'react-redux';
import { camerasFetchRequest } from '../../actions/rover-actions.js';

import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

import RoverSelectForm from './../rover-select-form';
import { style } from './rover-form-style.js';
import { Card } from 'material-ui';
import { Typography } from 'material-ui';

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
        <Typography variant='display2'>
          Pick a date to view:
        </Typography>

        <DatePicker
          selected={this.state.startDate}
          onChange={this.handleChange}
        />

        <Typography variant='display2'>
          Select a camera:
        </Typography>

        <RoverSelectForm 
          rover={this.props.rover} 
          startDate={moment(this.state.startDate).format('YYYY-MM-DD')}
        />
      </Card>
    );
  }
}