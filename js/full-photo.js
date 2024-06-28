import { commentsData, showListComment } from './comments.js';
import {fullPhoto, commentsList,bodyPage} from './const.js';

const fullPhotoCloseElement = fullPhoto.querySelector('.big-picture__cancel');
const fullPhotoImage = fullPhoto.querySelector('.big-picture__img img');
const commentsCount = fullPhoto.querySelector('.social__comment-total-count');
const likesCount = fullPhoto.querySelector('.likes-count');
const descriptionText = fullPhoto.querySelector('.social__caption');


const onDocumentKeydown = (evt) => {
  if (evt.key === 'Escape') {//закрытие по Escape
    evt.preventDefault();
    const activeModalElement = document.querySelector('.overlay:not(.hidden)');
    if(activeModalElement) {
      closeModal(activeModalElement);
    }
  }
};

function setDataFullPhoto(dataFullPhoto) {
  fullPhotoImage.src = dataFullPhoto.url;
  commentsData.showComments = 0;//обнуляем чтобы при открытии нескольких карточек не суммировалось количество комм-в
  commentsData.dataComments = dataFullPhoto.comments;
  descriptionText.textContent = dataFullPhoto.description;
  likesCount.textContent = dataFullPhoto.likes;
  commentsCount.textContent = dataFullPhoto.comments.length;
  commentsList.textContent = '';////обнуляем чтобы при открытии нескольких карточек не суммировались комментарии
  showListComment(commentsData.dataComments);
}

export function renderFullPhoto(dataFullPhoto){
  setDataFullPhoto(dataFullPhoto); //устанавливает данные в модальное окно
  openModal(fullPhoto);
}

fullPhotoCloseElement.addEventListener('click', () => {//закрытие по крестику
  closeModal(fullPhoto);
});

export function openModal(modalElement) {//показать окно
  modalElement.classList.remove('hidden');
  document.addEventListener('keydown', onDocumentKeydown);
  bodyPage.classList.add('modal-open');
}

export function closeModal(modalElement) {//скрыть окно
  modalElement.classList.add('hidden');
  document.removeEventListener('keydown', onDocumentKeydown);
  bodyPage.classList.remove('modal-open');
}

