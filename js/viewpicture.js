import {onModalEscKeydown} from './util.js';

const hiddenElementWindow = () => {
  document.body.classList.remove('modal-open');
  document.querySelector('.big-picture').classList.add('hidden');
};

const picturesContainer = document.querySelector('.pictures');
const modalCloseElement = document.querySelector('#picture-cancel');

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

const openModalWindow = (arr) => {
  picturesContainer.addEventListener('click', (event) => {

    if (event.target.nodeName === 'IMG') {
      document.querySelector('.big-picture').classList.remove('hidden');
      document.body.classList.add('modal-open');
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

      //modalCloseElement.addEventListener ('click', closeModalWindowClick, { once: true });
      const closeModalWindowClick = () => {
        hiddenElementWindow();
        modalCloseElement.removeEventListener ('keydown', closeModalWindowKeydown);
      };

      const closeModalWindowKeydown = (evt) => {
        onModalEscKeydown(evt);
        hiddenElementWindow();
        modalCloseElement.removeEventListener ('click', closeModalWindowClick);
      };

      modalCloseElement.addEventListener ('click', closeModalWindowClick, { once: true });

      document.addEventListener ('keydown',closeModalWindowKeydown, { once: true });
    }
  });
};

export {openModalWindow, hiddenElementWindow};
