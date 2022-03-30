const sliderElement = document.querySelector('.effect-level__slider');
const effectsList = document.querySelector('.effects__list');
const effectLevel = document.querySelector('.effect-level__value');
const imagePreview = document.querySelector('.img-upload__preview');

const EFFECT_CHROME = {range: {min: 0, max: 1}, start: 1, step: 0.1, format: {to: (value) => value.toFixed(1), from: (value) => parseFloat(value)}};
const EFFECT_SEPIA = {range: {min: 0, max: 1}, start: 1, step: 0.1, format: {to: (value) => value.toFixed(1), from: (value) => parseFloat(value)}};
const EFFECT_MARVIN = {range: {min: 0, max: 100}, start: 100, step: 1, format: {to: (value) => `${value}%`, from: (value) => parseFloat(value)}};
const EFFECT_PHOBOS = {range: {min: 0, max: 3}, start: 3, step: 0.1, format: {to: (value) => `${value.toFixed(1)}px`, from: (value) => parseFloat(value)}};
const EFFECT_HEAT = {range: {min: 0, max: 3}, start: 3, step: 0.1, format: {to: (value) => value.toFixed(1), from: (value) => parseFloat(value)}};

noUiSlider.create(sliderElement, {
  range: {min: 1, max: 3},
  start: 3,
  step: 0.1,
  connect: 'lower'
});

const switchEffects = {
  chrome: {'effect': EFFECT_CHROME, 'filter': 'grayscale'},
  sepia: {'effect': EFFECT_SEPIA, 'filter': 'sepia'},
  marvin: {'effect': EFFECT_MARVIN, 'filter': 'invert'},
  phobos: {'effect': EFFECT_PHOBOS, 'filter': 'blur'},
  heat: {'effect': EFFECT_HEAT, 'filter': 'brightness'}
};

effectsList.addEventListener('click', (evt) => {
  if(evt.target.tagName === 'INPUT') {
    const effectKey = evt.target.closest('input').value;
    if (effectKey !== 'none') {
      sliderElement.hidden = false;
      sliderElement.noUiSlider.updateOptions(switchEffects[effectKey]['effect']);
      sliderElement.noUiSlider.on('update', () => {
        effectLevel.value = sliderElement.noUiSlider.get();
        imagePreview.style.filter = `${switchEffects[effectKey]['filter']}(${sliderElement.noUiSlider.get()})`;
      });
    } else {
      imagePreview.style.filter = 'none';
      sliderElement.hidden = true;
    }
  }
});
