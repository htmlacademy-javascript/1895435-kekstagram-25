const uploadForm = document.querySelector('.img-upload__form');

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextTag: 'div'
});

const hashtagPattern = /^#[А-Яа-яЁё0-9_]{2,20}$/;
const valueHashtagInput = uploadForm.querySelector('.text__hashtags').value;
const hashtags = valueHashtagInput.split(' ');


function validateHashtag (value) {
  //hashtags.forEach ((item) => {
  return hashtagPattern.test(value);
  //alert(hashtagPattern.test(value));
  //});
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

pristine.addValidator(uploadForm.querySelector('.text__hashtags'), validateHashtag, 'Хэш-тег должен начинаться с #, не содержать спецсимволов и пробелы, максимальная длина одного хэш-тега 20 символов', 2, false);

//pristine.addValidator(uploadForm.querySelector('.text__hashtags'), duplicatHashtag, 'Дублирование хэш-тегов не допустимо');

//pristine.addValidator(uploadForm.querySelector('.text__hashtags'), lengthHashtag, 'Допускается не более 5 хэш-тегов');

uploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});
