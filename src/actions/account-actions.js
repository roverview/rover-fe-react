/* NEEDS TO BE UPDATED FOR AUTH PURPOSES */

import superagent from 'superagent';

let roverViewApi = 'https://rover-be-staging.herokuapp.com';
// let roverViewApi = 'http://localhost:3000';

// CREATE/POST NEW USER
export const userCreate = user => ({
  type: 'USER_CREATE',
  payload: user,
});

// FETCH/GET EXISTING USER
export const userFetch = user => ({
  type: 'USER_FETCH',
  payload: user,
});

export const userCreateRequest = user => (dispatch, getState) => {
  return superagent.post(`${roverViewApi}/db/users`)
    .then(res => {
      dispatch(userCreate(res.body));
      return res.body;
    });
};

export const userFetchRequest = user => (dispatch, getState) => {
  return superagent.get(`${roverViewApi}/db/users/${username}`)
    .then(res => {
      dispatch(userCreate(res.body));
      return res.body;
    });
};