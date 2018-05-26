export default (state=null, action) => {
  let { type, payload } = action;

  switch(type) {
  case 'USER_CREATE': 
    delete payload.password;
    delete payload.findHash;
    return payload;
  default:
    return state;
  }
};