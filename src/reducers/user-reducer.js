export default (state=null, action) => {
  let { type, payload } = action;

  switch(type) {
  case 'USER_CREATE': 
    delete payload.password;
    delete payload.findHash;
    return payload;
  case 'USER_FETCH':
    return payload;
  case 'USER_PHOTO_SAVE': 
    return payload;
  case 'USER_PHOTO_DELETE':
    let updatedPhotos = state.photos.filter(photo => photo._id !== payload._id);

    return Object.assign({}, state, { photos: updatedPhotos });
  default:
    return state;
  }
};