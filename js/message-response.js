import { bodyPage } from './const.js';
import { resetEditingForm } from './form-upload.js';

const successMessageTemplate = document.querySelector('#success').content.querySelector('.success');
const errorMessageTemplate = document.querySelector('#error').content.querySelector('.error');
let currentMessage;

const getUploadMessage = (template) => {
  currentMessage = template.cloneNode(true);
  bodyPage.append(currentMessage);
  bodyPage.addEventListener('click', onUploadMessageClose);
};

export const showUploadSuccessMessage = () => {
  getUploadMessage(successMessageTemplate);
  resetEditingForm();
};

export const showUploadErrorMessage = () => {
  getUploadMessage(errorMessageTemplate);
};

function onUploadMessageClose (evt) {
  evt.stopPropagation();
  const existElement = document.querySelector('.success') || document.querySelector('.error');
  const closeButton = existElement.querySelector('button');
  if(evt.target === existElement || evt.target === closeButton || evt.key === 'Escape'){
    existElement.remove();
    bodyPage.removeEventListener('keydown', onUploadMessageClose);
    bodyPage.removeEventListener('click', onUploadMessageClose);
  }
}
