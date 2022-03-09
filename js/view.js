import {getPhotos} from './loadingdata.js';

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const pictureMiniatures = getPhotos(25);

const listMiniatures = document.createDocumentFragment();

const countComments = (obj) => {
  let count = 0;
  for (let key in obj) {
    count++;
  }
  return count;
};

pictureMiniatures.forEach(({url, likes, comments}) => {
  let numberComments = [];
  numberComments.push(comments);
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__comments').textContent = numberComments.length;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  listMiniatures.append(pictureElement);
});

const pictures = document.querySelector('.pictures').append(listMiniatures);

export {pictures};
