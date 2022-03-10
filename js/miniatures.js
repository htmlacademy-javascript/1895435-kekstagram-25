const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const listMiniatures = document.createDocumentFragment();

const getMiniatures = (arr) => {
  arr.forEach(({url, likes, comments}) => {
    const pictureElement = pictureTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__comments').textContent = comments.length;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    listMiniatures.append(pictureElement);
  });
  return document.querySelector('.pictures').append(listMiniatures);
};

export {getMiniatures};
