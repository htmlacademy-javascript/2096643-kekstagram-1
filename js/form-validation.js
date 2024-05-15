import { uploadForm, hashtagInput, descriptionInput } from './const.js';
import { getNormalizedStringArray } from './util.js';

const MAX__HASHTAGS__COUNT = 5;
const MAX_COMMENTS_SYMBOLS = 140;

/*
-хэш-тег начинается с символа # (решётка);
-строка после решётки должна состоять из букв и чисел и не может содержать пробелы, спецсимволы (#, @, $ и т. п.), символы пунктуации (тире, дефис, запятая и т. п.), эмодзи и т. д.;
-хеш-тег не может состоять только из одной решётки;
-максимальная длина одного хэш-тега 20 символов, включая решётку;
-хэш-теги нечувствительны к регистру: #ХэшТег и #хэштег считаются одним и тем же тегом;
 */
const hashtagRegex = /^#[a-zа-яё0-9]{1,19}$/i;

//сообщения об ошибках

const errorMessage = {
  HASHTAG__COUNT: `Количество хэштегов должно быть не более ${MAX__HASHTAGS__COUNT}`,
  DUPLICATE_HASHTAGS: 'Хэштеги не должны повторяться',
  COMMENTS_SYMBOLS: `Максимальная длинна комментария ${MAX_COMMENTS_SYMBOLS}`
};
const incorrectHashtag = [];
const duplicateHashtag = [];

//проверка на валидность
function validateHashtagRules(value) {
  if (!value) {//если значение отсутствует - это не ошибка, тк поле не обязательное
    return true;
  }

  const hashtags = getNormalizedStringArray(value);

  hashtags.forEach((hashtag) => {
    if (hashtagRegex.test === false) {//проверяет соответствие, если невалиден - попадает в массив невалидных
      incorrectHashtag.push(hashtag);
    }
    return !incorrectHashtag.length <= 1;//если в массиве невалидных хэштегов хоть 1 есть - вернет false
  });
}

//функция выдает сообщение соответственно количеству неправильных хештегов
const getErrorValidateMessage = () => {
  let validateMessage;
  if (incorrectHashtag.length === 1) {
    validateMessage = 'Введен невалидный хештег';
  } else {
    validateMessage = 'Введены невалидные хештеги';
  }
  return validateMessage;
};

//функция проверяет количество хештегов в строке и сравнивает с правилами
const validateHashtagCount = (value) => {
  const hashtags = getNormalizedStringArray(value);
  return hashtags.length <= MAX__HASHTAGS__COUNT;
};

//проверяет строку на наличие одинаковых хештегов
const validateHashtagDuplicate = (value) => {
  const hashtags = getNormalizedStringArray(value);
  const uniqueHasgtags = new Set();

  hashtags.forEach((hashtag) => {
    uniqueHasgtags.add(hashtag);
    if (uniqueHasgtags.has(hashtag)) {
      duplicateHashtag.push(hashtag);
    }
    return !duplicateHashtag.length <= 1;
  });
};
//проверка длинны комментария
const validateDescriplionLength = (value) => MAX_COMMENTS_SYMBOLS >= value.length;

export const configureFormValidation = () => {
  const pristine = new Pristine(uploadForm, {
    classTo: 'img-upload__field-wrapper',
    errorTextParent: 'img-upload__field-wrapper',
    errorTextClass: 'img-upload__field-wrapper--error',
  });

  pristine.addValidator(hashtagInput, validateHashtagRules, getErrorValidateMessage);
  pristine.addValidator(hashtagInput, validateHashtagCount, errorMessage.HASHTAG__COUNT);
  pristine.addValidator(hashtagInput, validateHashtagDuplicate, errorMessage.DUPLICATE_HASHTAGS);
  pristine.addValidator(descriptionInput, validateDescriplionLength, errorMessage.COMMENTS_SYMBOLS);

  return {
    isValidForm: ()=> pristine.validate(),//Проверяем валидность формы
    resetValidate: ()=>pristine.reset(),//сбрасываем валидацию
  };
};
