import {getPhotos} from './loadingdata.js';
import {getMiniatures} from './miniatures.js';

const photosData = getPhotos(25);

getMiniatures(photosData);
