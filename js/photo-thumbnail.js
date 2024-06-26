const photosListElement = document.querySelector('.pictures');
const thumbnailDisplay = document.querySelector('#picture').content.querySelector('.picture');

const createThumbnail = ({url,likes,comments,description}, onClickImage) => {
  const photoElement = thumbnailDisplay.cloneNode(true);
  const photoImageElement = photoElement.querySelector('.picture__img');
  photoImageElement.src = url;
  photoElement.querySelector('.picture__likes').likes = likes;
  photoElement.querySelector('.picture__comments').comments = comments;
  photoImageElement.alt = description;
  photoImageElement.addEventListener('click', (e) =>{
    e.preventDefault();
    onClickImage({url,likes,comments,description});
  });

  return photoElement;
};

export const renderPhoto = (photosData, onClickImage) => {
  const photoListFragment = document.createDocumentFragment();

  photosData.forEach((picture) =>{
    const photoElement = createThumbnail(picture, onClickImage);
    photoListFragment.append(photoElement);
  });
  photosListElement.append(photoListFragment);
};
