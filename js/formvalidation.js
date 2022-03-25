const uploadForm = document.querySelector('.img-upload__form');
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
  let lengthArray = hashtagsArray.length;
  if (hashtagsArray[lengthArray-1] === '') {
    lengthArray = lengthArray-1;
    return true;
  }
  const hashtag = hashtagsArray[lengthArray-1];
  hashtagsArray.reverse();
  return !hashtagsArray.includes(hashtag, 1);
};

pristine.addValidator(document.querySelector('.text__hashtags'), (value) => hashtagPattern.test(value), 'Хэш-тег должен начинаться с #, не содержать спецсимволов и пробелы, максимальная длина одного хэш-тега 20 символов', 2, false);

pristine.addValidator(document.querySelector('.text__hashtags'), duplicatHashtag, 'Дублирование хэш-тегов не допустимо');

pristine.addValidator(document.querySelector('.text__hashtags'), () => hashtagsArray.length <= MAX_HASHTAGS, 'Допускается не более 5 хэш-тегов');

pristine.addValidator(document.querySelector('.text__description'), (value) => value.length <= MAX_COMMENT, 'Комментарий не должен превышать 140 символов');

uploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});
