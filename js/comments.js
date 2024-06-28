import {fullPhoto,commentsList} from './const.js';

const showCommentsCount = fullPhoto.querySelector('.social__comment-shown-count');
const commentsLoaderButton = fullPhoto.querySelector('.comments-loader');
const commentTemplate = document.querySelector('#comment').content.querySelector('.social__comment');

const COMMENTS_STEP = 5;
export const commentsData = {showComments: 0, dataComments: []} ;


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

export function showListComment(list) {//отображает количество показаных коментариев на странице
  if (list.length > COMMENTS_STEP) {
    createListComment(list.splice(0, COMMENTS_STEP));
    commentsData.showComments += COMMENTS_STEP;
    commentsLoaderButton.classList.remove('hidden');
  } else {
    createListComment(list);
    commentsData.showComments += list.length;
    commentsLoaderButton.classList.add('hidden');
  }
  showCommentsCount.textContent = commentsData.showComments;
}

commentsLoaderButton.addEventListener('click', () =>{//загрузка коментариев по кнопке
  showListComment(commentsData.dataComments);
});
