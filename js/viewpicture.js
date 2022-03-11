const picturesContainer = document.querySelector('.pictures');

const getComments = (arr) => {
  arr.forEach
  const commentsElementHTML = `<li class="social__comment">
  <img
      class="social__picture"
      src="${arr.avatar}"
      alt="${arr.nameAuthor}"
      width="35" height="35">
  <p class="social__text">${arr.message}</p>
</li>`;
document.querySelector('.social__comments').insertAdjacentHTML('beforeend', commentsElementHTML);
};

picturesContainer.addEventListener('click', (evt) => {
  if (evt.target.nodeName === 'IMG') {
    document.querySelector('.big-picture').classList.remove('hidden');
    document.querySelector('body').classList.add('modal-open');
    evt.preventDefault();
    const currentPicture = photosData[evt.target.id - 1];
    document.querySelector('.big-picture__img').firstElementChild.src = currentPicture.url;
    document.querySelector('.likes-count').textContent = currentPicture.likes;
    document.querySelector('.comments-count').textContent = currentPicture.comments.length;
    document.querySelector('.social__caption').textContent = currentPicture.description;
  }
});
