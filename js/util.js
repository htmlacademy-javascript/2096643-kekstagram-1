const getRandomInteger = (min, max) => {//генерирует случайное число
  const random = Math.random() * (max + 1 - min) + min;
  return Math.floor(random);
};

//выбор случайного элемента массива
const getRandomArrayElement = (array) => array[getRandomInteger(0, array.length - 1)];

export {getRandomArrayElement,getRandomInteger};
