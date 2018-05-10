export default (state=[], action) => {
  let { type, payload } = action;

  switch(type) {
  case 'MANIFEST_FETCH':
    return payload.photo_manifest;
  default:
    return state;
  }
};