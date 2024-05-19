import { commentsData, showListComment } from './comments.js';
import {bigPicture, commentsList,bodyPage} from './const.js';

const bigPictureCloseElement = bigPicture.querySelector('.big-picture__cancel');
const bigPictureImage = bigPicture.querySelector('.big-picture__img img');
const commentsCount = bigPicture.querySelector('.social__comment-total-count');
const likesCount = bigPicture.querySelector('.likes-count');
const descriptionText = bigPicture.querySelector('.social__caption');


const onDocumentKeydown = (evt) => {
  if (evt.key === 'Escape') {//закрытие по Escape
    evt.preventDefault();
    const activeModalElement = document.querySelector('.overlay:not(.hidden)');
    if(activeModalElement) {
      closeModal(activeModalElement);
    }
  }
};

function setDataBigPicture(dataBigPicture) {
  bigPictureImage.src = dataBigPicture.url;
  commentsData.showComments = 0;//обнуляем чтобы при открытии нескольких карточек не суммировалось количество комм-в
  commentsData.dataComments = dataBigPicture.comments;
  descriptionText.textContent = dataBigPicture.description;
  likesCount.textContent = dataBigPicture.likes;
  commentsCount.textContent = dataBigPicture.comments.length;
  commentsList.textContent = '';////обнуляем чтобы при открытии нескольких карточек не суммировались комментарии
  showListComment(commentsData.dataComments);
}

export function renderBigPicture(dataBigPicture){
  setDataBigPicture(dataBigPicture); //устанавливает данные в модальное окно
  openModal(bigPicture);
}

bigPictureCloseElement.addEventListener('click', () => {//закрытие по крестику
  closeModal(bigPicture);
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

