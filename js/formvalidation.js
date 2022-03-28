import {compareLength} from './util.js';

const uploadForm = document.querySelector('.img-upload__form');
const textHashtags = document.querySelector('.text__hashtags');
const textComments = document.querySelector('.text__description');
const MAX_HASHTAGS = 5;
const MAX_COMMENT = 140;

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextTag: 'div'
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

uploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});
