const uploadForm = document.querySelector('.img-upload__form');

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextTag: 'div'
});

const hashtagPattern = /^(#[A-za-zА-Яа-яЁё0-9_]{2,19}\s?)*$/;

const validateHashtag = (value) => hashtagPattern.test(value);

const duplicatHashtag = (value) => {
  let hashtagsLine = value;
  hashtagsLine = value;
  const hashtagsArray = hashtagsLine.split(' ');
  const lengthArray = hashtagsArray.length;
  if (lengthArray > 2) {
    for (let i = 2; i <= lengthArray; i++) {
      //alert(hashtagsArray + '-' + lengthArray + '-' + i);
      return !hashtagsArray.includes(hashtagsArray[i - 2], i - 1);
    }
  }
};
/*const hashtags = value.split(' ');
  let i = 1;
  hashtags.forEach ((item) => {
    hashtags.includes(item.toLowerCase(), i);
    i++;
  });*/

const lengthHashtag = () => {
  if (hashtags.length <= 5) {
    return true;
  }
};

//pristine.addValidator(uploadForm.querySelector('.text__hashtags'), validateHashtag, 'Хэш-тег должен начинаться с #, не содержать спецсимволов и пробелы, максимальная длина одного хэш-тега 20 символов', 2, false);

pristine.addValidator(uploadForm.querySelector('.text__hashtags'), duplicatHashtag, 'Дублирование хэш-тегов не допустимо');

//pristine.addValidator(uploadForm.querySelector('.text__hashtags'), lengthHashtag, 'Допускается не более 5 хэш-тегов');

uploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});
