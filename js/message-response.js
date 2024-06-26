import { bodyPage } from './const.js';
import { resetEditingForm } from './form-upload.js';

const successMessageTemplate = document.querySelector('#success').content.querySelector('.success');
const errorMessageTemplate = document.querySelector('#error').content.querySelector('.error');
const modalElementBackground = document.querySelector('.overlay');
const successMessageBackground = document.querySelector('.success');
const errorMessageBackground = document.querySelector('.error');
let currentMessage;

const getUploadMessage = (template, button) => { //получение шаблона всплывающего сообщения и закрытие его по ТЗ
  currentMessage = template.cloneNode(true);
  const messageButtonClose = currentMessage.querySelector(button);
  bodyPage.append(currentMessage);
  messageButtonClose.addEventListener('click', closeUploadMessage);//закрытие по крестику
  bodyPage.addEventListener('keydown', onDocumentKeydown);//закрытие по Esc
};

export const showUploadSuccessMessage = () => {
  getUploadMessage(successMessageTemplate, '.success__button');
  resetEditingForm();
};

export const showUploadErrorMessage = () => {
  getUploadMessage(errorMessageTemplate, '.error__button');
};

function closeUploadMessage() {
  currentMessage.remove();
  bodyPage.removeEventListener('keydown', onDocumentKeydown);
}

function onDocumentKeydown(evt) {
  evt.stopPropagation();
  if (evt.key === 'Escape') {
    closeUploadMessage();
  }
}


/* При выпадении сообщения о ошибке загрузки
нажатием на кнопку пропадает сообщение, но само окно остается и можно отправить повторно
если же нажать Esc то закрывается все насовсем
по ТЗ у пользователя должна быть возможность сохранить введеные данные, то есть при нажатии на Esc (при сообщении об ошибке) должно закрываться не все окно загрузки - а лишь сообщение об ошибке
При сообщении о успешной загрузке при любом способе закрытия должно закрываться все
как это реализовать??
*/
