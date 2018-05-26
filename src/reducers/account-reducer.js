export default (state=[], action) => {
  let { type, payload } = action;
  console.log(action)

  switch(type) {
  case 'USER_CREATE': 
    return [...state, payload];
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
