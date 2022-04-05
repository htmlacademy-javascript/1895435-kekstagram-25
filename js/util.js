const ALERT_SHOW_TIME = 5000;

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

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '20px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = '#ef4848';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

export { getRandomNum, getArrayElement, getTextMessage, compareLength, showAlert};
