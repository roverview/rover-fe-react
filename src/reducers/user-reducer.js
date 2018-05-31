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
    console.log('USER_PHOTO_DELETE', state);
    console.log('USER_PHOTO_DELETE', action);
    return payload;
  default:
    return state;
  }
};