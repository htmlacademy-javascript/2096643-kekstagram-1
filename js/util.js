//генерирует случайное число
const getRandomInteger = (min, max) => {
  const random = Math.random() * (max + 1 - min) + min;
  return Math.floor(random);
};

//выбор случайного элемента массива
const getRandomArrayElement = (array) => array[getRandomInteger(0, array.length - 1)];


//
const getNormalizedStringArray = (string) => {
  string.toString()//приводит к строке
    .toLowerCase()//приводит к одному регистру
    .trim()//удаляет пробелы в начале и конце
    .replace(/\s+/g, ' ')//убирает все пробелы между словами во всем документе
    .split(' ');//добавляет одиночныйпробел между словами
};
export { getRandomArrayElement, getRandomInteger, getNormalizedStringArray };
