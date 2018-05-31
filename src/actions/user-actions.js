import superagent from 'superagent';
let roverViewApi = 'http://localhost:3000';

export const userProfileCreate = (user) => ({
  type: 'USER_CREATE',
  payload: user,
});

export const userProfileUpdate = (user) => ({
  type: 'USER_UPDATE',
  payload: user,
});

export const userProfileFetch = (user) => ({
  type: 'USER_PHOTOS_FETCH',
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

// post photo data & update profile with photos array
export const userPhotoCreateRequest = (user, photo) => (dispatch, getState) => {
  let { token } = getState();

  return superagent.post(`${roverViewApi}/api/${user}`)
    .set('Authorization', `Bearer ${token}`)
    .send(photo)
    .then(res => {
      dispatch(userProfileUpdate(res.body));
      return res;
    });
};

// post photo data & update profile with photos array
export const userPhotoFetchRequest = (user) => (dispatch, getState) => {
  let { token } = getState();

  return superagent.get(`${roverViewApi}/api/${user._id}/photos`)
    .set('Authorization', `Bearer ${token}`)
    .then(res => {
      dispatch(userProfileFetch(res.body));
      return res;
    });
};