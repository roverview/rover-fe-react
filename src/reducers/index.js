import { combineReducers } from 'redux';
import roverCameras from './rover-cameras-reducer.js';
import roverPhotos from './rover-photos-reducer';
import roverManifest from './rover-manifest-reducer.js';

export default combineReducers({ roverCameras, roverPhotos, roverManifest });
