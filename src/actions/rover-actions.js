import superagent from 'superagent';
import { findShortCamera } from './../lib/rover-cameras.js';
import dotenv from 'dotenv';

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
  return superagent.get(`${process.env.API_PHOTO_URL}${rover}/photos?earth_date=${date}&api_key=${process.env.API_KEY}`)
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

  return superagent.get(`${process.env.API_PHOTO_URL}${rover}/photos?earth_date=${date}&camera=${shortCamera}&api_key=${process.env.API_KEY}`)
    .then(res => {
      dispatch(photosFetch(res.body));
      return res.body;
    });
};
