import superagent from 'superagent';
import { findShortCamera } from './../lib/rover-cameras.js';

const apiPhotoUrl = 'https://api.nasa.gov/mars-photos/api/v1/rovers/';
const apiKey = 'F7GBoBZ1JBWwwehiwisVuPyIkX8yk8W6rmsDHazU';

export const camerasFetch = roverCameras => ({
  type: 'ROVER_CAMERA_FETCH',
  payload: roverCameras,
});

export const photosFetch = roverPhotos => ({
  type: 'ROVER_PHOTOS_FETCH',
  payload: roverPhotos,
});


// GET cameras for rover
export const camerasFetchRequest = (rover, date) => (dispatch, getState) => {
  return superagent.get(`${apiPhotoUrl}${rover}/photos?earth_date=${date}&api_key=${apiKey}`)
    .then(res => {
      let cameras = [];

      for (let i = 0; i < res.body.photos.length; i++) {
        let fullName = res.body.photos[i].camera.full_name;
        if (cameras.indexOf(fullName) === -1) {
          cameras.push(fullName);
        }
      }
      return cameras;
    })
    .then(cameras => {
      return dispatch(camerasFetch(cameras));
    });
};

// fetch photo
export const photosFetchRequest = (rover, date, camera) => (dispatch, getState) => {
  let shortCamera = findShortCamera(camera);
  
  return superagent.get(`${apiPhotoUrl}${rover}/photos?earth_date=${date}&camera=${shortCamera}&api_key=${apiKey}`)
    .then(res => {
      dispatch(photosFetch(res.body));
      return res.body;
    });
};
