import superagent from 'superagent';
let roverViewApi = 'http://localhost:3000';

export const userProfileCreate = (user) => ({
  type: 'USER_CREATE',
  payload: user,
});

export const userProfileCreateRequest = (user) => (dispatch, getState) => {
  let { token } = getState();

  return superagent.post(`${roverViewApi}/api/profile`)
    .set('Authorization', `Bearer ${token}`)
    .then(res => {
      dispatch(userProfileCreate(res.body));
      return res;
    });
};
