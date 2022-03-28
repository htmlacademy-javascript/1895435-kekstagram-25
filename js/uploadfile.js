import './formvalidation.js';

const uploadFile = document.querySelector('#upload-file');
const uploadForm = document.querySelector('.img-upload__form');
const editPictureForm = document.querySelector('.img-upload__overlay');
const modalCloseElement = document.querySelector('#upload-cancel');

const onPopupCloseElementClick = () => {
  editPictureForm.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener ('keydown', onPopupEscKeydown);
  uploadForm.reset();
};

function onPopupEscKeydown (evt) {
  const hashtagInput = String(document.activeElement.classList);
  if (evt.key === 'Escape' &&  !['text__hashtags', 'text__description'].includes(hashtagInput)) {
    evt.preventDefault();
    editPictureForm.classList.add('hidden');
    document.body.classList.remove('modal-open');
    document.removeEventListener('keydown', onPopupEscKeydown);
    modalCloseElement.removeEventListener ('click', onPopupCloseElementClick);
    uploadForm.reset();
  }
}

uploadFile.addEventListener('change', () => {
  editPictureForm.classList.remove('hidden');
  document.body.classList.add('modal-open');
  modalCloseElement.addEventListener('click', onPopupCloseElementClick, {once: true});
  document.addEventListener ('keydown', onPopupEscKeydown);
});
