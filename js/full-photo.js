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
// const commentElementTemplate = bigPicture.querySelector('.social__comment');

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
  descriptionText.textContent = dataBigPicture.description;
  likesCount.likes = dataBigPicture.likes;
  commentsCount.textContent = dataBigPicture.comments.length;
  commentsList.textContent = '';
  // const renderComments = (commentsData) =>{
  //   commentsData.forEach((comments)=>{
  //     const commentElement = commentElementTemplate.cloneNode(true);
  //     commentsList.append(commentElement);
  //   });
  // };
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
