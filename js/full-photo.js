import { renderComments } from './comments.js';
import { fullPhoto,bodyPage } from './const.js';

const fullPhotoCloseElement = fullPhoto.querySelector('.big-picture__cancel');
const fullPhotoImage = fullPhoto.querySelector('.big-picture__img img');
const likesCount = fullPhoto.querySelector('.likes-count');
const descriptionText = fullPhoto.querySelector('.social__caption');


const onDocumentKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    const activeModalElement = document.querySelector('.overlay:not(.hidden)');
    if(activeModalElement) {
      closeModal(activeModalElement);
    }
  }
};

function setDataFullPhoto(dataFullPhoto) {
  fullPhotoImage.src = dataFullPhoto.url;
  descriptionText.textContent = dataFullPhoto.description ? dataFullPhoto.description : 'Нет описания';
  likesCount.textContent = dataFullPhoto.likes;
  renderComments(dataFullPhoto.comments);
}

export function renderFullPhoto(dataFullPhoto){
  setDataFullPhoto(dataFullPhoto);
  openModal(fullPhoto);
}

fullPhotoCloseElement.addEventListener('click', () => {
  closeModal(fullPhoto);
});

export function openModal(modalElement) {
  modalElement.classList.remove('hidden');
  document.addEventListener('keydown', onDocumentKeydown);
  bodyPage.classList.add('modal-open');
}

export function closeModal(modalElement) {
  modalElement.classList.add('hidden');
  document.removeEventListener('keydown', onDocumentKeydown);
  bodyPage.classList.remove('modal-open');
}

