import { bodyPage } from './const.js';
const ALERT_SHOW_TIME = 5000;

//генерирует случайное число
const getRandomInteger = (min, max) => {
  const random = Math.random() * (max + 1 - min) + min;
  return Math.floor(random);
};

//выбор случайного элемента массива
const getRandomArrayElement = (array) => array[getRandomInteger(0, array.length - 1)];


//
const getNormalizedStringArray = (string) =>
  string.toString()//приводит к строке
    .toLowerCase()//приводит к одному регистру
    .trim()//удаляет пробелы в начале и конце
    .replace(/\s+/g, ' ')//убирает все пробелы между словами во всем документе
    .split(' ');//добавляет одиночныйпробел между словами


//сообщение об ошибке при загрузке с сервера

export const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';
  alertContainer.style.color = 'black';

  alertContainer.textContent = message;

  bodyPage.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

export { getRandomArrayElement, getRandomInteger, getNormalizedStringArray };
