const getPhotos = (fn) => {
  fetch('https://25.javascript.pages.academy/kekstagram/data')
    .then((response) => response.json())
    .then((photos) => fn(photos));
};

export {getPhotos};
