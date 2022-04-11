import {getMiniatures} from './miniatures.js';
import {getRandomNum} from './util.js';

const RANDOM_NAMBER = 10;

const buttonFilterDefault = document.querySelector('#filter-default');
const buttonFilterRandom = document.querySelector('#filter-random');
const buttonFilterDiscussed = document.querySelector('#filter-discussed');

const getArrayRandomNamber = (arr) => {
  const arrayKey = new Set;
  while (arrayKey.size !== RANDOM_NAMBER) {
    arrayKey.add(getRandomNum(0, arr.length-1));
  }
  const arrayPhotos = [];
  for (const key of arrayKey) {
    arrayPhotos.push(arr[key]);
  }
  return arrayPhotos;
};

/*
onButtonClickFilterDefault = () => {
  getMiniatures(arrayPhotos);
};
*/
export {getArrayRandomNamber};
