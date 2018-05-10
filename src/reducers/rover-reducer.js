export default (state=[], action) => {
  let {type, payload} = action;

  switch(type) {
  case 'MANIFEST_FETCH':
    return [...state, payload];
  default:
    return state;
  }
};