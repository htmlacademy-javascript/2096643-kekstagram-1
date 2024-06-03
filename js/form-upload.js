import { bodyPage,uploadForm, hashtagInput, descriptionInput } from './const.js';
import {configureFormValidation} from './form-validation.js';
import { getNormalizedStringArray } from './util.js';
import {activatingImageEditingScale, resetImageEditingScale} from './scale-photo.js';


const fileUploadElement = uploadForm.querySelector('.img-upload__input');
const editForm = uploadForm.querySelector('.img-upload__overlay');
const closeFormButton = uploadForm.querySelector('.img-upload__cancel');
const hashtagsElement = document.querySelector('.text__hashtags');
const descriptionElement = document.querySelector('.text__description');

fileUploadElement.addEventListener('change', () => {
  openEditingImageForm();
});

//функция закрытия окна по escape с исключениями закрытия при фокусе на полях хэштега и коментария
const onDocumentKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    if (![hashtagsElement, descriptionElement].includes(document.activeElement)) {
      closeEditingImageForm();
    }
  }
};
const {isValidForm, resetValidate} = configureFormValidation(uploadForm, hashtagInput, descriptionInput);

uploadForm.addEventListener('submit', (evt) =>{
  if(isValidForm()){
    hashtagsElement.value = getNormalizedStringArray(hashtagsElement.value);
    descriptionElement.value = descriptionElement.value.trim();
    resetValidate();
  } else {
    evt.preventDefault();
  }
});

//функция открытия окна редактирования файла
function openEditingImageForm() {
  editForm.classList.remove('hidden');
  bodyPage.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
  closeFormButton.addEventListener('click', closeEditingImageForm);
  activatingImageEditingScale();
}

//функция закрытия окна редактирования файла
function closeEditingImageForm() {
  editForm.classList.add('hidden');
  bodyPage.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  fileUploadElement.value = '';//сбрасывает значение поля с выбором фото
  resetValidate();
  uploadForm.reset();//сбрасывает значения в форме редактирования
  resetImageEditingScale();
}
