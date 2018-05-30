import superagent from 'superagent';
let roverViewApi = 'http://localhost:3000';

export const userPhotoCreate = (photo) => ({
  type: 'USER_PHOTO_CREATE',
  payload: photo,
});

export const userPhotoCreateRequest = (user, photo) => (dispatch, getState) => {
  let { token } = getState();

  console.log(token)

  return superagent.post(`${roverViewApi}/api/${user}`)
    .set('Authorization', `Bearer ${token}`)
    // .send(photo)
    .then(res => {
      dispatch(userPhotoCreate(res.body));
      return res;
    });
};