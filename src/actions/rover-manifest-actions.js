import superagent from 'superagent';

// GET mission manifest for each rover from Mars Rover API
export const manifestFetch = roverManifest => ({
  type: 'MANIFEST_FETCH',
  payload: roverManifest,
});

export const manifestFetchRequest = rover => (dispatch, getState) => {
  return superagent.get(`${__API_MANIFEST_URL__}${rover}?api_key=${__API_KEY__}`)
    .then(res => {
      dispatch(manifestFetch(res.body));
      return res.body.photo_manifest;
    });
};