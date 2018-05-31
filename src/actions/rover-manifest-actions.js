import superagent from 'superagent';

// GET mission manifest for each rover from Mars Rover API
export const manifestFetch = roverManifest => ({
  type: 'MANIFEST_FETCH',
  payload: roverManifest,
});

export const manifestFetchRequest = rover => (dispatch, getState) => {
  return superagent.get(`${process.env.API_MANIFEST_URL}${rover}?api_key=${process.env.API_KEY}`)
    .then(res => {
      dispatch(manifestFetch(res.body));
      return res.body.photo_manifest;
    });
};