const maxPhotoCount = 25;
const maxCommentCount = 30;
let identifier;
const ID = [];
const names = [
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

const commentText = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const description = [
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

const getRandomInteger = (min, max) => {
  const random = Math.random() * (max + 1 - min) + min;
  return Math.floor(random);
};

const getRandomArrayElement = (array) => array[getRandomInteger(0, array.length - 1)];

const getIdentifier = () => {
  if (ID.length > maxPhotoCount) {
    return 'Фотографии кончились';
  }

  identifier = getRandomInteger(1, maxPhotoCount);

  while (ID.includes(identifier)) {
    identifier = getRandomInteger(1, maxPhotoCount);
  }
  ID.push(identifier);
  return identifier;
};

const createDataComment = () => ({
  id: crypto.randomUUID(),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: getRandomInteger(commentText),
  name: getRandomInteger(names),
});

const createDataPhoto = () => ({
  id: getIdentifier(),
  url: `photos/${identifier}.jpg`,
  likes: getRandomInteger(15,200),
  comments: Array.from({length: getRandomInteger(0, maxCommentCount)}, createDataComment),
  description: getRandomArrayElement(description),
});

const photosData = Array.from({length: maxPhotoCount}, createDataPhoto);
console.log(photosData);
