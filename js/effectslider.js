const sliderElement = document.querySelector('.effect-level__slider');
const effectsList = document.querySelector('.effects__list');
const effectLevel = document.querySelector('.effect-level__value');
const imagePreview = document.querySelector('.img-upload__preview');
const slaiderField = document.querySelector('.img-upload__effect-level');

const EFFECT_CHROME = {range: {min: 0, max: 1}, start: 1, step: 0.1, format: {to: (value) => value.toFixed(1), from: (value) => parseFloat(value)}};
const EFFECT_SEPIA = {range: {min: 0, max: 1}, start: 1, step: 0.1, format: {to: (value) => value.toFixed(1), from: (value) => parseFloat(value)}};
const EFFECT_MARVIN = {range: {min: 0, max: 100}, start: 100, step: 1, format: {to: (value) => `${value}%`, from: (value) => parseFloat(value)}};
const EFFECT_PHOBOS = {range: {min: 0, max: 3}, start: 3, step: 0.1, format: {to: (value) => `${value.toFixed(1)}px`, from: (value) => parseFloat(value)}};
const EFFECT_HEAT = {range: {min: 0, max: 3}, start: 3, step: 0.1, format: {to: (value) => value.toFixed(1), from: (value) => parseFloat(value)}};

const EFFECTS = {
  chrome: [EFFECT_CHROME, 'grayscale'],
  sepia: [EFFECT_SEPIA, 'sepia'],
  marvin: [EFFECT_MARVIN, 'invert'],
  phobos: [EFFECT_PHOBOS, 'blur'],
  heat: [EFFECT_HEAT, 'brightness']
};

const getEffectSlider = () => {
  noUiSlider.create(sliderElement, {range: {min: 1, max: 3}, start: 3, step: 0.1, connect: 'lower'});
  slaiderField.hidden = true;
  imagePreview.style.filter = 'none';
};

const onEffectElementClick = (evt) => {
  if(evt.target.tagName === 'INPUT') {
    const effectKey = evt.target.closest('input').value;
    if (effectKey !== 'none') {
      slaiderField.hidden = false;
      sliderElement.noUiSlider.updateOptions(EFFECTS[effectKey][0]);
      sliderElement.noUiSlider.on('update', () => {
        effectLevel.value = sliderElement.noUiSlider.get();
        imagePreview.style.filter = `${EFFECTS[effectKey][1]}(${sliderElement.noUiSlider.get()})`;
      });
    } else {
      imagePreview.style.filter = 'none';
      slaiderField.hidden = true;
    }
  }
};

effectsList.addEventListener('click', onEffectElementClick);

export {getEffectSlider, sliderElement};
