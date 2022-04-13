import {getData} from './dataserver.js';
import {getFilterPhotos} from './filters.js';
import {openModalWindow} from './viewpicture.js';
import {showAlert} from './alerts.js';
import './uploadfile.js';
import './changescale.js';
import './effectslider.js';
import './filters.js';


const dataPhotos = getData('https://25.javascript.pages.academy/kekstagram/data')
  .catch(() => showAlert('Что-то пошло не так! Фотографии не загрузились. Попробуйте ещё раз.'));

dataPhotos.then((data) => {
  getFilterPhotos(data);
  openModalWindow(data);
})
  .then(() => document.querySelector('.img-filters').classList.remove('img-filters--inactive'));
