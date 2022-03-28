import {getPhotos} from './loadingdata.js';
import {getMiniatures} from './miniatures.js';
import {openModalWindow} from './viewpicture.js';
import './uploadfile.js';

const photosData = getPhotos(25);

getMiniatures(photosData);

openModalWindow(photosData);

