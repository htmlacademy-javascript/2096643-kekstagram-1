const imageUploadPreview = document.querySelector('.img-upload__preview');
const controlScaleSmaller = document.querySelector('.scale__control--smaller');
const controlScaleBigger = document.querySelector('.scale__control--bigger');
const controlscaleValue = document.querySelector('.scale__control--value');

const ScaleOptions = {
  MIN_SCALE: 25,
  MAX_SCALE: 100,
  STEP_SCALE: 25,
};

const updateScale = (controlValue) => {
  controlscaleValue.value = `${controlValue}%`;
  imageUploadPreview.style.transform = `scale(${controlValue / 100})`;
};

const onControlScaleSmallerClick = () => {
  let controlValue = parseInt(controlscaleValue.value, 10);
  if (controlValue > ScaleOptions.MIN_SCALE) {
    controlValue -= ScaleOptions.STEP_SCALE;
    updateScale(controlValue);
  }
};

const onControlScaleBiggerClick = () => {
  let controlValue = parseInt(controlscaleValue.value, 10);
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
  controlscaleValue.value = `${ScaleOptions.MAX_SCALE}%`;
  imageUploadPreview.style.transform = null;
};


