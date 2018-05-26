export default (state=null, action) => {
  let { type, payload } = action;

  switch(type) {
  case 'TOKEN_SET': 
    return payload;
  default:
    return state;
  }
};

// export const userCreate = user => ({
//   type: 'USER_CREATE',
//   payload: user,
// });

// // FETCH/GET EXISTING USER
// export const userFetch = user => ({
//   type: 'USER_FETCH',
//   payload: user,
