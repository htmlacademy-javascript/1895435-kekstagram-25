import {getData} from './dataserver.js';
import {getMiniatures} from './miniatures.js';
import {openModalWindow} from './viewpicture.js';
import {showAlert} from './alerts.js';
import './uploadfile.js';
import './changescale.js';
import './effectslider.js';

const dataPhotos = getData('https://25.javascript.pages.academy/kekstagram/data')
  .catch(() => showAlert('Что-то пошло не так! Фотографии не загрузились. Попробуйте ещё раз.'));

dataPhotos.then((data) => {
  getMiniatures(data);
  openModalWindow(data);
  document.querySelector('.img-filters').classList.remove('img-filters--inactive');
});
