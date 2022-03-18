import {hideElementWindow, modalCloseElement, onPopupClick} from './viewpicture.js';

const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const getArrayElement = (arr) => arr[getRandomNum(0, arr.length - 1)];

const getTextMessage = (arr) => {
  let value = getRandomNum(1, 2);
  let text = '';
  while (value !== 0) {
    text += getArrayElement(arr);
    value--;
  }
  return text;
};

const onPopupEscKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    hideElementWindow();
    document.removeEventListener('keydown', onPopupEscKeydown);
    modalCloseElement.removeEventListener ('click', onPopupClick);
  }
};

export { getRandomNum, getArrayElement, getTextMessage, onPopupEscKeydown};
