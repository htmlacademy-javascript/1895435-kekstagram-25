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

export { getRandomNum, getArrayElement, getTextMessage};
