import { sendData } from './dataserver.js';
import {compareLength} from './util.js';
import {showAlert} from './util.js';

const uploadForm = document.querySelector('.img-upload__form');
const textHashtags = document.querySelector('.text__hashtags');
const textComments = document.querySelector('.text__description');
const MAX_HASHTAGS = 5;
const MAX_COMMENT = 140;

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__text-valid',
  errorTextParent: 'img-upload__text-valid',
});

const hashtagPattern = /^(#[A-za-zА-Яа-яЁё0-9_]{2,19}\s?)*$/;

let hashtagsArray = [];

const duplicatHashtag = (value) => {
  const hashtagsLine = String(value.toLowerCase());
  hashtagsArray = hashtagsLine.split(' ');
  return hashtagsArray.length === new Set(hashtagsArray).size;
};

pristine.addValidator(textHashtags, (value) => hashtagPattern.test(value), 'Хэш-тег должен начинаться с #, не содержать спецсимволов и пробелы, максимальная длина одного хэш-тега 20 символов', 2, false);

pristine.addValidator(textHashtags, duplicatHashtag, 'Дублирование хэш-тегов не допустимо');

pristine.addValidator(textHashtags, () => compareLength(hashtagsArray, MAX_HASHTAGS), 'Допускается не более 5 хэш-тегов');

pristine.addValidator(textComments, (value) => compareLength(value, MAX_COMMENT), 'Комментарий не должен превышать 140 символов');

const submitButton = document.querySelector('#upload-submit');

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Публикую...';
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Опубликовать';
};

//const setForm = () => {
uploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if(pristine.validate()) {
    blockSubmitButton();
    const formData = new FormData(evt.target);
    sendData('https://25.javascript.pages.academy/kekstagram1', formData);
    unblockSubmitButton();
  }
});
//};
