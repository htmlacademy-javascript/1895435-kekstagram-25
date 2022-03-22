const uploadForm = document.querySelector('.img-upload__form');

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextTag: 'span'
});

const hashtagPattern = /^#[А-Яа-яЁё0-9_]{2,20}$/;
const valueHashtagInput = uploadForm.querySelector('.text__hashtags').value;
const hashtags = valueHashtagInput.split(' ');

const validateHashtag = () => {
  hashtags.forEach ((item) => {
    const valid = hashtagPattern.test(item);
  });
};

const duplicatHashtag = () => {
  let i = 1;
  hashtags.forEach ((item) => {
    hashtags.includes(item.toLowerCase(), i);
    i++;
  });
};

const lengthHashtag = () => {
  if (hashtags.length <= 5) {
    return true;
  }
};

pristine.addValidator(valueHashtagInput, validateHashtag, 'Хэш-тег должен начинаться с #, не содержать спецсимволов и пробелы, максимальная длина одного хэш-тега 20 символов');

pristine.addValidator(valueHashtagInput, duplicatHashtag, 'Дублирование хэш-тегов не допустимо');

pristine.addValidator(valueHashtagInput, lengthHashtag, 'Допускается не более 5 хэш-тегов');

uploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});
