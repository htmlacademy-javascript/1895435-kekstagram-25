import {hiddenElementWindow} from './viewpicture.js';

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

const onModalEscKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    //hiddenElementWindow();
  }
};

const onModalClick = () => hiddenElementWindow();

const closeModalWindowClick = () => {
  onModalClick();
  document.removeEventListener('keydown', onModalEscKeydown);
  document.removeEventListener ('click', onModalClick);
};

const closeModalWindowKeydown = (evt) => {
  onModalEscKeydown(evt);
  document.removeEventListener('keydown', onModalEscKeydown);
  document.removeEventListener ('click', onModalClick);
};

export { getRandomNum, getArrayElement, getTextMessage, closeModalWindowClick, closeModalWindowKeydown, onModalEscKeydown };
