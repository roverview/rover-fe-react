import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { signUpRequest } from '../../actions/auth-actions.js';

import { TextField } from 'material-ui';
import { Input } from 'material-ui';
import { Button } from 'material-ui';

import './_signup-style.scss';
import { Typography } from 'material-ui/styles';

class SignUp extends Component {
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
      <div className='signup'>
        <TextField
          name='username'
          className='signupInput'
          label='signup'
          type='text'
          onChange={this.handleChange}
        />
        <TextField
          name='password'
          className='signupInput'
          label='password'
          type='password'
          onChange={this.handleChange}
        />
        <Button onClick={this.handleSubmit}>Submit</Button>

        <p>Have an account? Sign in <Link to='/login'>here</Link>.</p>
      </div>
    );
  }
}

let mapDispatchToProps = (dispatch) => ({
  tokenSet: user => dispatch(signUpRequest(user)),
});

export default connect(null, mapDispatchToProps)(SignUp);