const ALERT_SHOW_TIME = 5000;

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


const successTemplate = document.querySelector('#success').content.querySelector('.success');
const alertSuccess = successTemplate.cloneNode(true);

const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const viewContainer = document.body;//document.querySelector('.img-upload__overlay');

const onAlertCloseElementClick = () => {
  viewContainer.removeChild(alertSuccess);
};

const onAlertCloseWindowClick = (evt) => {
  const ariaClick = evt.composedPath().includes('DIV');
  alert(ariaClick);
  //if (ariaClick) {
  //  viewContainer.removeChild(document.body.lastChild);
  //}
};

const viewAlertSuccess = () => {
  viewContainer.appendChild(alertSuccess);
  document.querySelector('.success__button').addEventListener('click', onAlertCloseElementClick);
  document.addEventListener('click', onAlertCloseWindowClick);
};

const viewAlertError = () => {
  const alertError = errorTemplate.cloneNode(true);
  viewContainer.appendChild(alertError);
};

export {showAlert, viewAlertSuccess, viewAlertError};
