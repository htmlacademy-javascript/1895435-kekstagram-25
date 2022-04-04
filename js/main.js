import {getPhotos} from './dataserver.js';
import {getMiniatures} from './miniatures.js';
import {openModalWindow} from './viewpicture.js';
import './uploadfile.js';
import './changescale.js';
import './effectslider.js';

getPhotos(getMiniatures);

getPhotos(openModalWindow);

//getMiniatures(photosData);

//openModalWindow(photosData);
