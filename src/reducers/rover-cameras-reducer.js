export default (state=[], action) => {
  let { type, payload } = action;

  switch(type) {
  case 'ROVER_CAMERA_FETCH':
    return payload;
  default:
    return state;
  }
};