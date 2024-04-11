const bigPicture = document.querySelector('.big-picture');
const bigPictureCloseElement = bigPicture.querySelector('.big-picture__cancel');
const bigPictureImage = bigPicture.querySelector('.big-picture__img img');
const commentsList = bigPicture.querySelector('.social__comments');
const showCommentsCount = bigPicture.querySelector('.social__comment-count');
const commentsCount = bigPicture.querySelector('.comments-count');
const likesCount = bigPicture.querySelector('.likes-count');
const descriptionText = bigPicture.querySelector('.social__caption');
const bodyPage = document.querySelector('body');
const comentsLoaderButton = bigPicture.querySelector('.comments-loader');
const commentTemplate = document.querySelector('#comment').content.querySelector('.social__comment');
const COMMENTS_STEP = 5;
let showComments;
let dataComments = 0;


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
  showComments = 0;
  dataComments = dataBigPicture.comments;
  descriptionText.textContent = dataBigPicture.description;
  likesCount.textContent = dataBigPicture.likes;
  commentsCount.textContent = dataBigPicture.comments.length;
  commentsList.textContent = '';
  showListComment(dataComments);
}

export function renderBigPicture(dataBigPicture){
  setDataBigPicture(dataBigPicture); //устанавливает данные в модальное окно
  openModal(bigPicture);
}

const createListComment = (comments) => {
  const commentsListFragment = document.createDocumentFragment();

  comments.forEach((comment) => {
    const commentElement = commentTemplate.cloneNode(true);//клонирует шаблон
    const commentAvatar = commentElement.querySelector('.social__picture');
    commentAvatar.src = comment.avatar;//заполняет комментарий данными
    commentAvatar.alt = comment.name;
    commentElement.querySelector('.social__text').textContent = comment.message;
    commentsListFragment.append(commentElement);
  });
  commentsList.append(commentsListFragment);//доб их в разметку
};

function showListComment(list) {//отображает количество показаных коментариев на странице
  if (list.length > COMMENTS_STEP) {
    createListComment(list.splice(0, COMMENTS_STEP));
    showComments += COMMENTS_STEP;
    comentsLoaderButton.classList.remove('hidden');
  } else {
    createListComment(list);
    showComments += list.length;
    comentsLoaderButton.classList.add('hidden');
  }
  showCommentsCount.textContent = showComments;
}

comentsLoaderButton.addEventListener('click', () =>{//загрузка коментариев по кнопке
  showListComment(dataComments);
});

bigPictureCloseElement.addEventListener('click', () => {//закрытие по крестику
  closeModal(bigPicture);
});

function openModal(modalElement) {//показать окно
  modalElement.classList.remove('hidden');
  document.addEventListener('keydown', onDocumentKeydown);
  bodyPage.classList.add('modal-open');
}

function closeModal(modalElement) {//скрыть окно
  modalElement.classList.add('hidden');
  document.removeEventListener('keydown', onDocumentKeydown);
  bodyPage.classList.remove('modal-open');
}

