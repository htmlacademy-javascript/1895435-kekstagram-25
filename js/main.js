import {getPhotos} from './dataserver.js';
import {getMiniatures} from './miniatures.js';
import {openModalWindow} from './viewpicture.js';
import './uploadfile.js';
import './changescale.js';
import './effectslider.js';

//getPhotos(getMiniatures, openModalWindow);

//getPhotos(openModalWindow);

//getMiniatures(photosData);

//openModalWindow(photosData);

const showAlert = (message) => {
  alert(message);
};

getPhotos('https://25.javascript.pages.academy/kekstagram/data1')
  .then((data) => {
    getMiniatures(data);
    openModalWindow(data);
  })
  .catch((err) => {
    showAlert('Not found');
  });
