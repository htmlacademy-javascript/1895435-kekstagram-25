const TIMEOUT_DEBOUNCE = 500;

const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const getArrayElement = (arr) => arr[getRandomNum(0, arr.length - 1)];

const getTextMessage = (arr) => {
  let value = getRandomNum(1, 2);
  let text = '';
  while (value !== 0) {
    text += getArrayElement(arr);
    value--;
  }
  return text;
};

const compareLength = (value, max) => value.length <= max;

function debounce (callback, timeoutDelay = TIMEOUT_DEBOUNCE) {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}

export { getRandomNum, getArrayElement, getTextMessage, compareLength, debounce};
