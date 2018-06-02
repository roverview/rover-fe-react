import superagent from 'superagent';

export const userCreate = (user) => ({
  type: 'USER_CREATE',
  payload: user,
});

export const userFetch = (user) => ({
  type: 'USER_FETCH',
  payload: user,
});

export const userPhotoSave = (user) => ({
  type: 'USER_PHOTO_SAVE',
  payload: user,
});

export const userPhotoDelete = (photo) => ({
  type: 'USER_PHOTO_DELETE',
  payload: photo,
});

export const userCreateRequest = (user) => (dispatch, getState) => {
  let { token } = getState();

  return superagent.post(`${__ROVERVIEW_API__}/api/profile`)
    .set('Authorization', `Bearer ${token}`)
    .then(res => {
      dispatch(userCreate(res.body));
      return res;
    });
};

export const userFetchRequest = (user) => (dispatch, getState) => {
  let { token } = getState();

  return superagent.get(`${__ROVERVIEW_API__}/api/${user}/photos`)
    .set('Authorization', `Bearer ${token}`)
    .then(res => {
      dispatch(userFetch(res.body));
      return res;
    });
};

// post photo data & update profile with photos array
export const userPhotoSaveRequest = (user, photo) => (dispatch, getState) => {
  let { token } = getState();

  return superagent.post(`${__ROVERVIEW_API__}/api/${user}`)
    .set('Authorization', `Bearer ${token}`)
    .send(photo)
    .then(res => {
      dispatch(userPhotoSave(res.body));
      return res;
    });
};

export const userPhotoDeleteRequest = (photo) => (dispatch, getState) => {
  let { token } = getState();

  return superagent.delete(`${__ROVERVIEW_API__}/api/${photo.userId}/${photo._id}`)
    .set('Authorization', `Bearer ${token}`)
    .then(res => {
      dispatch(userPhotoDelete(photo));
      return res;
    });
};