// import {createDataComment} from './data.js';
const bigPicture = document.querySelector('.big-picture');
const bigPictureCloseElement = bigPicture.querySelector('.big-picture__cancel');
const bigPictureImage = bigPicture.querySelector('.big-picture__img img');
const commentsCount = bigPicture.querySelector('.comments-count');
const commentsList = bigPicture.querySelector('.social__comments');
const likesCount = bigPicture.querySelector('.likes-count');
const descriptionText = bigPicture.querySelector('.social__caption');
const bodyPage = document.querySelector('body');
const comentsLoaderButoon = bigPicture.querySelector('.comments-loader');
const commentsCountBlock = bigPicture.querySelector('.social__comment-count');
const commentTemplate = document.querySelector('#comment').content.querySelector('.social__comment');

const onDocumentKeydown = (evt) => {
  if (evt.key === 'Escape') {//закрытие по Escape
    evt.preventDefault();
    const activeModalElement = document.querySelector('.overlay:not(.hidden)');
    if(activeModalElement) {
      closeModal(activeModalElement);
    }
  }
};

const createListComment = (comments) => {
  const commentsListFragment = document.createDocumentFragment();

  comments.forEach((comment) => {
    const commentElement = commentTemplate.cloneNode(true);
    const commentAvatar = commentElement.querySelector('.social__picture');
    commentAvatar.src = comment.avatar;
    commentAvatar.alt = comment.name;
    commentElement.querySelector('.social__text').textContent = comment.message;
    commentsListFragment.append(commentElement);
  });
  commentsList.append(commentsListFragment);
};

function setDataBigPicture(dataBigPicture) {
  bigPictureImage.src = dataBigPicture.url;
  descriptionText.textContent = dataBigPicture.description;
  likesCount.textContent = dataBigPicture.likes;
  commentsCount.textContent = dataBigPicture.comments.length;
  commentsList.textContent = '';
  createListComment(dataBigPicture.comments);
}


export function renderBigPicture(dataBigPicture){
  setDataBigPicture(dataBigPicture); //устанавливает данные в модальное окно
  openModal(bigPicture);
}

function openModal(modalElement) {
  modalElement.classList.remove('hidden');//показать окно
  document.addEventListener('keydown', onDocumentKeydown);
  bodyPage.classList.add('modal-open');
  comentsLoaderButoon.classList.add('hidden');//скрыть по п.3 в дз до следующего задния
  commentsCountBlock.classList.add('hidden');//скрыть по п.3 в дз до следующего задния
}

function closeModal(modalElement) {
  modalElement.classList.add('hidden');//скрыть окно
  document.removeEventListener('keydown', onDocumentKeydown);
  bodyPage.classList.remove('modal-open');
}

bigPictureCloseElement.addEventListener('click', () => {//закрытие по крестику
  closeModal(bigPicture);
});
