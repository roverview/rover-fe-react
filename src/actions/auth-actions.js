import superagent from 'superagent';
import { userProfileCreate } from './user-actions.js';

// let roverViewApi = 'https://rover-be-staging.herokuapp.com';
let roverViewApi = 'http://localhost:3000';

export const tokenSet = token => ({
  type: 'TOKEN_SET',
  payload: token,
});

export const signUpRequest = (user) => (dispatch, getState) => {
  return superagent.post(`${roverViewApi}/api/signup`)
    .send(user)
    .then(res => {
      dispatch(tokenSet(res.body.findHash));
      dispatch(userProfileCreate(res.body));
      return res;
    });
};

export const loginRequest = (user) => (dispatch) => {
  return superagent.get(`${roverViewApi}/api/signin`)
    .auth(user.username, user.password)
    .then(res => {
      dispatch(tokenSet(res.body.findHash));
      dispatch(userProfileCreate(res.body));
      return res;
    });
};