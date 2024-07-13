import { photoFiltersContainer } from './const.js';
import { renderPhoto } from './photo-thumbnail.js';
import { debounce, sortRandomly } from './util.js';

const PICTURES_COUNT = 10;
const DEBOUNCE_DELAY = 500;

const Filter = {
  RANDOM: 'filter-random',
  DISCUSSED: 'filter-discussed',
  DEFAULT: 'filter-default'
};

const debounceRenderPhoto = debounce(renderPhoto, DEBOUNCE_DELAY);

const sortByComments = (pictureA, pictureB) => pictureB.comments.length - pictureA.comments.length;

const onButtonFilterClick = {
  [Filter.DEFAULT]: (picturesData) => picturesData,
  [Filter.DISCUSSED]: (picturesData) => picturesData.slice().sort(sortByComments),
  [Filter.RANDOM]: (picturesData) => sortRandomly(picturesData, PICTURES_COUNT)
};

const filterPhotos = (clickedButton, pictures, callback) => {
  const filteredPhotos = onButtonFilterClick[clickedButton.id](pictures);
  debounceRenderPhoto(filteredPhotos, callback);
};

const setActiveClass = (target) => {
  if (target.classList.contains('img-filters__button--active')) {
    return;
  }
  const activeButton = photoFiltersContainer.querySelector('.img-filters__button--active');
  activeButton.classList.remove('img-filters__button--active');
  target.classList.add('img-filters__button--active');

};

export const init = (loaderPictures, callback) => {
  photoFiltersContainer.classList.remove('img-filters--inactive');


  photoFiltersContainer.addEventListener('click', (evt) => {
    const clickedButton = evt.target.closest('.img-filters__button');
    if (clickedButton) {
      setActiveClass(clickedButton);
      filterPhotos(clickedButton, loaderPictures, callback);
    }
  });
};
