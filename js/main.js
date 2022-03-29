import {getPhotos} from './loadingdata.js';
import {getMiniatures} from './miniatures.js';
import {openModalWindow} from './viewpicture.js';
import './uploadfile.js';
import './changescale.js';
import './effectslider.js';

const photosData = getPhotos(25);

getMiniatures(photosData);

openModalWindow(photosData);
