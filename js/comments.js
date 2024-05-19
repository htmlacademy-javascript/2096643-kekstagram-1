import {bigPicture,commentsList} from './const.js';

const showCommentsCount = bigPicture.querySelector('.social__comment-shown-count');
const comentsLoaderButton = bigPicture.querySelector('.comments-loader');
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
    comentsLoaderButton.classList.remove('hidden');
  } else {
    createListComment(list);
    commentsData.showComments += list.length;
    comentsLoaderButton.classList.add('hidden');
  }
  showCommentsCount.textContent = commentsData.showComments;
}

comentsLoaderButton.addEventListener('click', () =>{//загрузка коментариев по кнопке
  showListComment(commentsData.dataComments);
});
