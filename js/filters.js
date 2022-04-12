import {getMiniatures} from './miniatures.js';
import {getRandomNum} from './util.js';

const RANDOM_NAMBER = 10;

document.querySelector('.img-filters').classList.remove('img-filters--inactive');

const buttonsFilter = document.querySelector('.img-filters__form');

const getArrayRandomPhotos = (arr) => {
  const arrayKey = new Set;
  while (arrayKey.size !== RANDOM_NAMBER) {
    arrayKey.add(getRandomNum(0, arr.length-1));
  }
  const arrPhotos = [];
  for (const key of arrayKey) {
    arrPhotos.push(arr[key]);
  }
  return arrPhotos;
};

let arrayPhotos = [];

const getFilterPhotos = (arr) => {
  arrayPhotos = arr.slice();
  getMiniatures(arr);
};


const onButtonClickFilter = (evt) => {
  switch (evt.target.id) {
    case 'filter-random': getMiniatures(getArrayRandomPhotos(arrayPhotos));
      break;
    case 'filter-discussed':
      arrayPhotos.sort((photoA, photoB) => (photoB.comments.length - photoA.comments.length));
      break;
    default: getMiniatures(arrayPhotos);
  }
};

/*
onButtonClickFilterDefault = () => {
  getMiniatures(arrayPhotos);
};
*/
buttonsFilter.addEventListener('click', onButtonClickFilter);

export {getArrayRandomPhotos, getFilterPhotos};
