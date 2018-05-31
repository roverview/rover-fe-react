export default (state=null, action) => {
  let { type, payload } = action;

  switch(type) {
  case 'USER_CREATE': 
    delete payload.password;
    delete payload.findHash;
    return payload;
  case 'USER_UPDATE': 
    return payload;
  case 'USER_PHOTOS_FETCH':
    return payload;
  default:
    return state;
  }
};