import superagent from 'superagent';
import { userCreate } from './user-actions.js';
import dotenv from 'dotenv';

export const tokenSet = token => ({
  type: 'TOKEN_SET',
  payload: token,
});

export const signUpRequest = (user) => (dispatch, getState) => {
  return superagent.post(`${process.env.ROVERVIEW_API}/api/signup`)
    .send(user)
    .then(res => {
      dispatch(tokenSet(res.body.findHash));
      dispatch(userCreate(res.body));
      return res;
    });
};

export const loginRequest = (user) => (dispatch) => {
  return superagent.get(`${process.env.ROVERVIEW_API}/api/signin`)
    .auth(user.username, user.password)
    .then(res => {
      dispatch(tokenSet(res.body.findHash));
      dispatch(userCreate(res.body));
      return res;
    });
};