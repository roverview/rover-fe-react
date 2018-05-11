export default (state=[], action) => {
  let { type, payload } = action;

  switch(type) {
  case 'ROVER_PHOTOS_FETCH':
    return payload.photos;
  default:
    return state;
  }
};