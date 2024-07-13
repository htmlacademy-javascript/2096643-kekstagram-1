import { previewImage } from './const.js';

const ScaleOptions = {
  MIN_SCALE: 25,
  MAX_SCALE: 100,
  STEP_SCALE: 25,
};

const controlScaleSmaller = document.querySelector('.scale__control--smaller');
const controlScaleBigger = document.querySelector('.scale__control--bigger');
const controlScaleValue = document.querySelector('.scale__control--value');

const updateScale = (controlValue) => {
  controlScaleValue.value = `${controlValue}%`;
  previewImage.style.transform = `scale(${controlValue / 100})`;
};

const onControlScaleSmallerClick = () => {
  let controlValue = parseInt(controlScaleValue.value, 10);
  if (controlValue > ScaleOptions.MIN_SCALE) {
    controlValue -= ScaleOptions.STEP_SCALE;
    updateScale(controlValue);
  }
};

const onControlScaleBiggerClick = () => {
  let controlValue = parseInt(controlScaleValue.value, 10);
  if (controlValue < ScaleOptions.MAX_SCALE) {
    controlValue += ScaleOptions.STEP_SCALE;
    updateScale(controlValue);
  }
};

export const activatingImageEditingScale = () => {
  controlScaleSmaller.addEventListener('click', onControlScaleSmallerClick);
  controlScaleBigger.addEventListener('click', onControlScaleBiggerClick);
};

export const resetImageEditingScale = () => {
  controlScaleValue.value = `${ScaleOptions.MAX_SCALE}%`;
  previewImage.style.transform = null;
};


