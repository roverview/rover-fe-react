export default (state=null, action) => {
  let { type, payload } = action;

  switch(type) {
  case 'TOKEN_SET': 
    return payload;
  default:
    return state;
  }
};