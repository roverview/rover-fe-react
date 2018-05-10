import superagent from 'superagent';

const apiPhotoUrl = 'https://api.nasa.gov/mars-photos/api/v1/rovers/';
const apiManifestUrl = 'https://api.nasa.gov/mars-photos/api/v1/manifests/';
const apiKey = 'F7GBoBZ1JBWwwehiwisVuPyIkX8yk8W6rmsDHazU';

// GET mission manifest for each rover from Mars Rover API
export const manifestFetch = rover => ({
  type: 'MANIFEST_FETCH',
  payload: rover,
});

export const manifestFetchRequest = rover => (dispatch, getState) => {
  getState();

  return superagent.get(`${apiManifestUrl}${rover}?api_key=${apiKey}`)
    .then(res => {
      dispatch(manifestFetch(res.body));
      return res;
    });
};