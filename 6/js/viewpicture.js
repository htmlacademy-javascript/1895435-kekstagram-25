import {isEscapeKey} from './util.js';

const closeModalWindow = () => {
  document.querySelector('body').classList.remove('modal-open');
  document.querySelector('.big-picture').classList.add('hidden');
};

const onModalEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeModalWindow();
  }
};

const picturesContainer = document.querySelector('.pictures');
const ModalCloseElement = document.querySelector('#picture-cancel');

const getComments = (arr) => {
  for (const comment of arr) {
    const commentsElementHTML = `<li class="social__comment">
    <img
      class="social__picture"
      src="${comment.avatar}"
      alt="${comment.nameAuthor}"
      width="35" height="35">
    <p class="social__text">${comment.message}</p>
    </li>`;
    document.querySelector('.social__comments').insertAdjacentHTML('beforeend', commentsElementHTML);
  }
};

const viewPicture = (arr) => {
  picturesContainer.addEventListener('click', (event) => {

    if (event.target.nodeName === 'IMG') {
      document.querySelector('.big-picture').classList.remove('hidden');
      document.querySelector('body').classList.add('modal-open');
      event.preventDefault();
      const currentPicture = arr[event.target.id - 1];
      document.querySelector('.big-picture__img').firstElementChild.src = currentPicture.url;
      document.querySelector('.likes-count').textContent = currentPicture.likes;
      document.querySelector('.comments-count').textContent = currentPicture.comments.length;
      document.querySelector('.social__caption').textContent = currentPicture.description;
      document.querySelector('.social__comments').innerHTML = '';
      getComments(currentPicture.comments);
      document.querySelector('.social__comment-count').classList.add('hidden');
      document.querySelector('.comments-loader').classList.add('hidden');

      ModalCloseElement.addEventListener ('click', () => {
        closeModalWindow();
        document.removeEventListener('keydown', onModalEscKeydown);
      });

      document.addEventListener ('keydown',(evt) => {
        if (isEscapeKey(evt)) {
          evt.preventDefault();
          closeModalWindow();
          document.removeEventListener('keydown', onModalEscKeydown);
        }
      });
    }
  });
};

const openModalWindow = (arr) => {
  viewPicture(arr);
};

export {openModalWindow};
