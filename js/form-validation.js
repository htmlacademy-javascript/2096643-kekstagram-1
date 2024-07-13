import { uploadForm, hashtagsInput, descriptionInput } from './const.js';
import { getNormalizedStringArray } from './util.js';

const MAX_HASHTAGS_COUNT = 5;
const MAX_COMMENTS_SYMBOLS = 140;
const MAX_HASHTAG_SYMBOLS = 1;
const MIN_HASHTAG_SYMBOLS = 19;

const ErrorMessage = {
  HASHTAG_COUNT: `Количество хэштегов должно быть не более ${MAX_HASHTAGS_COUNT}`,
  DUPLICATE_HASHTAGS: 'Хэштеги не должны повторяться',
  COMMENTS_SYMBOLS: `Максимальная длинна комментария ${MAX_COMMENTS_SYMBOLS}`
};
const incorrectHashtags = [];

const hashtagRegex = new RegExp(`^#[a-zа-яё0-9]{${MAX_HASHTAG_SYMBOLS},${MIN_HASHTAG_SYMBOLS}}$`,'i');

function validateHashtagRules(value) {
  if (!value) {
    return true;
  }

  const hashtags = getNormalizedStringArray(value);
  incorrectHashtags.length = 0;
  hashtags.forEach((hashtag) => {
    if (hashtagRegex.test(hashtag) === false) {
      incorrectHashtags.push(hashtag);
    }
  });
  return !incorrectHashtags.length;
}

const getErrorValidateMessage = () => (incorrectHashtags.length === 1) ? 'Введен невалидный хештег' : 'Введены невалидные хештеги';

const validateHashtagCount = (value) => {
  const hashtags = getNormalizedStringArray(value);
  return hashtags.length <= MAX_HASHTAGS_COUNT;
};

const validateHashtagDuplicate = (value) => {
  const hashtags = getNormalizedStringArray(value);
  const uniqueHashtags = new Set(hashtags);
  return hashtags.length === uniqueHashtags.size;

};
const validateDescriptionLength = (value) => MAX_COMMENTS_SYMBOLS >= value.length;

export const configureFormValidation = () => {
  const pristine = new Pristine(uploadForm, {
    classTo: 'img-upload__field-wrapper',
    errorTextParent: 'img-upload__field-wrapper',
    errorTextClass: 'img-upload__field-wrapper--error',
  });

  pristine.addValidator(hashtagsInput, validateHashtagRules, getErrorValidateMessage);
  pristine.addValidator(hashtagsInput, validateHashtagCount, ErrorMessage.HASHTAG_COUNT);
  pristine.addValidator(hashtagsInput, validateHashtagDuplicate, ErrorMessage.DUPLICATE_HASHTAGS);
  pristine.addValidator(descriptionInput, validateDescriptionLength, ErrorMessage.COMMENTS_SYMBOLS);

  return {
    isValidForm: ()=> pristine.validate(),
    resetValidate: ()=>pristine.reset(),
  };
};
