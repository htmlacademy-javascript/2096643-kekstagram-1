import {getRandomArrayElement,getRandomInteger} from './util.js';

const PHOTO_COUNT = 25;
const COMMENT_COUNT = 30;
const AVATAR_COUNT = 6;
const ID = [];
const NAMES = [
  'Алина',
  'Кристина',
  'Иван',
  'Артемий',
  'Ксения',
  'Ян',
  'Кристоф',
  'Злата',
  'Маргарита',
  'Таисия',
  'Зоя',
  'Маргарита',
  'Джон',
  'Николай',
  'Василий',
  'Геннадий',
  'Афанасий',
];

const COMMENT_TEXT = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const DESCRIPTIONS = [
  'Солнечный день',
  'Красивое небо',
  'Темная ночь',
  'Красивый закат',
  'Яркое солнце',
  'Белый снег',
  'Чистый пруд',
  'Огненный цветок',
  'Пушистые облака',
  'Солнечный луч',
  'Загадочный лес',
  'Потрясающая природа',
  'Цветочный луг',
  'Детские радости',
  'Маковое поле',
  'Розовый слон',
  'Огненный закат',
  'Лавандовый аромат',
  'Мерцающий блеск',
  'Лучший день',
  'Невероятная красота',
  'Розовый куст',
  'Ужасающая тень',
  'Мамино тепло',
];
let identifier;


//генерация случайных идентификаторов
const getIdentifier = () => {
  if (ID.length > PHOTO_COUNT) {
    return 'Фотографии кончились';
  }

  identifier = getRandomInteger(1, PHOTO_COUNT);

  while (ID.includes(identifier)) {
    identifier = getRandomInteger(1, PHOTO_COUNT);
  }
  ID.push(identifier);
  return identifier;
};

const createDataComment = () => ({
  id: crypto.randomUUID(),
  avatar: `img/avatar-${getRandomInteger(1, AVATAR_COUNT)}.svg`,
  message: getRandomArrayElement(COMMENT_TEXT),
  name: getRandomArrayElement(NAMES),
});

const createDataPhoto = () => ({
  id: getIdentifier(),
  url: `photos/${identifier}.jpg`,
  likes: getRandomInteger(15,200),
  comments: Array.from({length: getRandomInteger(0, COMMENT_COUNT)}, createDataComment),
  description: getRandomArrayElement(DESCRIPTIONS),
});

const photosData = Array.from({length: PHOTO_COUNT}, createDataPhoto);

export {photosData};
