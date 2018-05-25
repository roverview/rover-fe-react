import React, { Component } from 'react';
import { TextField } from 'material-ui';
import { Input } from 'material-ui';
import { Button } from 'material-ui';

import './_login-style.scss';

export default class Login extends Component {
  render() {
    return (
      <div className='login'>
        <TextField
          className='loginInput'
          label='login'
          type='text'
        />
        <TextField
          className='loginInput'
          label='password'
          type='password'
        />
        <Button>Submit</Button>
      </div>
    );
  }
}
