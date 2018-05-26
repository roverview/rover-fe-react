import { combineReducers } from 'redux';
import roverCameras from './rover-cameras-reducer.js';
import roverPhotos from './rover-photos-reducer';
import roverManifest from './rover-manifest-reducer.js';
import token from './auth-reducer.js';
import user from './user-reducer.js';

export default combineReducers({ roverCameras, roverPhotos, roverManifest, token, user });
