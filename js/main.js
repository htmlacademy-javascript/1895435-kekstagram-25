import {getData} from './dataserver.js';
import {getMiniatures} from './miniatures.js';
import {openModalWindow} from './viewpicture.js';
import {showAlert} from './util.js';
import './uploadfile.js';
import './changescale.js';
import './effectslider.js';

getData('https://25.javascript.pages.academy/kekstagram/data', getMiniatures, openModalWindow)
  .catch(() => showAlert('Что-то пошло не так! Фотографии не загрузились. Попробуйте ещё раз.'));
