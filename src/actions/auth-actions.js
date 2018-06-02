import superagent from 'superagent';
import { userCreate, userFetch } from './user-actions.js';

export const tokenSet = (token) => ({
  type: 'TOKEN_SET',
  payload: token,
});

export const tokenDelete = () => {
  localStorage.clear();
  return {
    type: 'TOKEN_DELETE',
    payload: null,
  };
};

export const signUpRequest = (user) => (dispatch, getState) => {
  return superagent.post(`${process.env.ROVERVIEW_API}/api/signup`)
    .send(user)
    .then(res => {
      dispatch(tokenSet(res.body.findHash));
      try {
        localStorage.roverviewToken = res.body.findHash;
        localStorage.roverviewId = res.body._id;
      } catch(error) {
        console.log(error);
      }
      dispatch(userCreate(res.body));
      return res;
    });
};

export const loginRequest = (user) => (dispatch, getState) => {
  return superagent.get(`${process.env.ROVERVIEW_API}/api/signin`)
    .auth(user.username, user.password)
    .then(res => {
      dispatch(tokenSet(res.body.findHash));
      try {
        localStorage.roverviewToken = res.body.findHash;
        localStorage.roverviewId = res.body._id;
      } catch(error) {
        console.log(error);
      }
      dispatch(userFetch(res.body));
      return res;
    });
};