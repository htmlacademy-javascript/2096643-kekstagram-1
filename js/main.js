import './util.js';
import './full-photo.js';
import './form-upload.js';
import './scale-photo.js';
import './effects.js';
import './message-response.js';
import { setUploadFormSubmit } from './form-upload.js';
import { closeModal, renderFullPhoto } from './full-photo.js';
import { editForm } from './const.js';
import { getData } from './api.js';
import { renderPhoto } from './photo-thumbnail.js';
import { showAlert } from './util.js';

getData(
  (data) => renderPhoto(data, renderFullPhoto),
  () => showAlert('При загрузке произошла ошибка. Попробуйте еще раз')
);

setUploadFormSubmit(() => closeModal(editForm));

