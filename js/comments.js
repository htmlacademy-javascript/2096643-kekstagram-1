import { fullPhoto,commentsList } from './const.js';

const COMMENTS_STEP = 5;

const showCommentsCount = fullPhoto.querySelector('.social__comment-shown-count');
const commentsCount = fullPhoto.querySelector('.social__comment-total-count');
const commentsLoaderButton = fullPhoto.querySelector('.comments-loader');
const commentTemplate = document.querySelector('#comment').content.querySelector('.social__comment');

let currentComments = [];


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

export function onLoaderButtonClick() {
  const shownComments = commentsList.childElementCount;
  let endOfSlice = shownComments + COMMENTS_STEP;
  const isAllCommentsShown = endOfSlice >= currentComments.length;
  endOfSlice = isAllCommentsShown ? currentComments.length : endOfSlice;
  const commentsSlice = currentComments.slice(shownComments, endOfSlice);
  createListComment(commentsSlice);
  showCommentsCount.textContent = endOfSlice;
  commentsLoaderButton.classList.toggle('hidden', isAllCommentsShown);
}

export const renderComments = (comments) => {
  commentsList.textContent = '';
  commentsCount.textContent = comments.length;
  currentComments = comments;
  commentsLoaderButton.click();
};

commentsLoaderButton.addEventListener('click', onLoaderButtonClick);
