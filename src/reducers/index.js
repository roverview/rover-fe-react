import { combineReducers } from 'redux';
import roverCameras from './rover-cameras-reducer.js';
import roverManifest from './rover-manifest-reducer.js';

export default combineReducers({ roverCameras, roverManifest });
