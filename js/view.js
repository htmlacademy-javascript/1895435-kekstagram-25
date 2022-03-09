import {getPhotos} from './loadingdata.js';

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const pictureMiniatures = getPhotos(25);

const listMiniatures = document.createDocumentFragment();

pictureMiniatures.forEach(({url, likes, comments}) => {
  const listComments = [];
  listComments.push(comments);
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__comments').textContent = listComments.length;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  listMiniatures.append(pictureElement);
});

const pictures = document.querySelector('.pictures').append(listMiniatures);

export {pictures};
