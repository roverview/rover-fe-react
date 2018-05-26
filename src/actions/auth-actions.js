import superagent from 'superagent';
import { userCreateRequest } from './user-actions.js';

// let roverViewApi = 'https://rover-be-staging.herokuapp.com';
let roverViewApi = 'http://localhost:3000';

export const tokenSet = token => ({
  type: 'TOKEN_SET',
  payload: token,
});

// FETCH/GET EXISTING USER
// export const userFetch = user => ({
//   type: 'USER_FETCH',
//   payload: user,
// });

export const signUpRequest = (user) => (dispatch, getState) => {
  return superagent.post(`${roverViewApi}/api/signup`)
    .send(user)
    .then(res => {
      dispatch(tokenSet(res.text));
      return res;
    });
};

export const loginRequest = (user) => (dispatch) => {
  return superagent.get(`${__API_URL__}/api/login`)
    .withCredentials()
    .auth(user.username, user.password)
    .then(res => {
      dispatch(tokenSet(res.text));
      return res;
    });
};