import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { loginRequest } from '../../actions/auth-actions.js';

import { TextField } from 'material-ui';
import { Input } from 'material-ui';
import { Button } from 'material-ui';

import './_login-style.scss';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    
    return this.props.tokenSet(this.state)
      .then(() => {
        this.props.history.push('/');
      });
  }

  render() {
    return (
      <div className='login'>
        <TextField
          name='username'
          className='loginInput'
          label='login'
          type='text'
          onChange={this.handleChange}
        />
        <TextField
          name='password'
          className='loginInput'
          label='password'
          type='password'
          onChange={this.handleChange}
        />
        <Button onClick={this.handleSubmit}>Submit</Button>
      </div>
    );
  }
}

let mapDispatchToProps = (dispatch) => ({
  tokenSet: user => dispatch(loginRequest(user)),
});

export default connect(null, mapDispatchToProps)(Login);