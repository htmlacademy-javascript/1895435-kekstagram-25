const COUNT_COMMENTS =5;

const hideElementWindow = () => {
  document.body.classList.remove('modal-open');
  document.querySelector('.big-picture').classList.add('hidden');
};

const picturesContainer = document.querySelector('.pictures');
const modalCloseElement = document.querySelector('#picture-cancel');
const commentsLoader = document.querySelector('.comments-loader');

const getComments = (arr) => {
  let i = 0, j = COUNT_COMMENTS;
  const arraylength = arr.length;
  return () => {
    if (i < (arraylength)) {
      const sliceArr = arr.slice(i,j);
      for (const comment of sliceArr) {
        const commentsElementHTML = `<li class="social__comment">
        <img
          class="social__picture"
          src="${comment.avatar}"
          alt="${comment.name}"
         width="35" height="35">
        <p class="social__text">${comment.message}</p>
        </li>`;
        document.querySelector('.social__comments').insertAdjacentHTML('beforeend', commentsElementHTML);
      }
      j = (j < arraylength) ? j : arraylength;
      document.querySelector('.comments-count').textContent = `${j} из ${arraylength}`;
      if (j === arraylength) {
        commentsLoader.classList.add('hidden');
      }
      i += COUNT_COMMENTS;
      j += COUNT_COMMENTS;
    }
  };
};


const onPopupCloseElementClick = () => {
  hideElementWindow();
  document.removeEventListener ('keydown', onPopupEscKeydown);
};

function onPopupEscKeydown (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    hideElementWindow();
    document.removeEventListener('keydown', onPopupEscKeydown);
    modalCloseElement.removeEventListener ('click', onPopupCloseElementClick);
  }
}

const openModalWindow = (arr) => {
  picturesContainer.addEventListener('click', (evt) => {

    if (evt.target.nodeName === 'IMG') {
      document.querySelector('.big-picture').classList.remove('hidden');
      document.body.classList.add('modal-open');
      commentsLoader.classList.remove('hidden');
      evt.preventDefault();
      const index = arr.findIndex((item) => item.id === Number(evt.target.id));
      const currentPicture = arr[index];
      document.querySelector('.big-picture__img').firstElementChild.src = currentPicture.url;
      document.querySelector('.likes-count').textContent = currentPicture.likes;
      document.querySelector('.social__caption').textContent = currentPicture.description;
      document.querySelector('.social__comments').innerHTML = '';
      const onCommentsLoad = getComments(currentPicture.comments);
      onCommentsLoad();

      commentsLoader.addEventListener('click', onCommentsLoad);

      modalCloseElement.addEventListener ('click', onPopupCloseElementClick, {once: true});

      document.addEventListener ('keydown', onPopupEscKeydown);
    }
  });
};

export {openModalWindow};
