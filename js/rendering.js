const userPhotos = document.querySelector('.pictures');
const thumbnailDisplay = document.querySelector('#picture').content.querySelector('.picture');

const createThumbnail = ({url,likes,comments}) => {
  const photoElement = thumbnailDisplay.cloneNode(true);
  photoElement.querySelector('.picture__img').src = url;
  photoElement.querySelector('.picture__likes').likes = likes;
  photoElement.querySelector('.picture__comments').comments = comments;
  return photoElement;
};

const renderPhoto = (photosData) => {
  const photoListFragment = document.createDocumentFragment();

  photosData.forEach((picture) =>{
    const photoElement = createThumbnail(picture);
    photoListFragment.append(photoElement);
  });
  userPhotos.append(photoListFragment);
};

export {renderPhoto};


