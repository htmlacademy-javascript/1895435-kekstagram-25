import './formvalidation.js';
import {getEffectSlider, sliderElement} from './effectslider.js';

const uploadFile = document.querySelector('#upload-file');
const uploadForm = document.querySelector('.img-upload__form');
const editPictureForm = document.querySelector('.img-upload__overlay');
const modalCloseElement = document.querySelector('#upload-cancel');
const imgUploadPreview = document.querySelector('.img-upload__preview');
const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const onPopupCloseElementClick = () => {
  editPictureForm.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener ('keydown', onPopupEscKeydown);
  uploadForm.reset();
  sliderElement.noUiSlider.destroy();
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
    sliderElement.noUiSlider.destroy();
  }
}

const uploadImagePreview = () => {
  const file = uploadFile.files[0];
  const fileName = file.name.toLowerCase();
  const fileValid = FILE_TYPES.some((it) => fileName.endsWith(it));
  if (fileValid) {
    imgUploadPreview.firstElementChild.src = URL.createObjectURL(file);
  }
};

uploadFile.addEventListener('change', () => {
  editPictureForm.classList.remove('hidden');
  document.body.classList.add('modal-open');
  uploadImagePreview();
  getEffectSlider();
  modalCloseElement.addEventListener('click', onPopupCloseElementClick, {once: true});
  document.addEventListener ('keydown', onPopupEscKeydown);
});

export {onPopupCloseElementClick};
