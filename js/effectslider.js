const sliderElement = document.querySelector('.effect-level__slider');

const EFFECT_CHROME = {range: {min: 0, max: 1}, start: 1, step: 0.1};
const EFFECT_SEPIA = {range: {min: 0, max: 1}, start: 1, step: 0.1};
const EFFECT_MARVIN = {range: {min: 0, max: 100}, start: 100, step: 1, format: {to: (value) => `${value}%`}};
const EFFECT_PHOBOS = {range: {min: 0, max: 3}, start: 3, step: 0.1, format: {to: (value) => `${value.toFixed(1)}px`}};
const EFFECT_HEAT = {range: {min: 0, max: 3}, start: 1, step: 0.1};

noUiSlider.create(sliderElement, {
  range: {min: 1, max: 3},
  start: 3,
  step: 0.1,
  connect: 'lower',
  format: {to: (value) => value.toFixed(1), from: (value) => parseFloat(value)}
});

const switchEffects = {
  'effect-chrome': {'effect': EFFECT_CHROME, 'filter': 'grayscale'},

};
