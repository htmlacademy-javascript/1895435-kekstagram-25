import {viewAlertSuccess, viewAlertError} from './alerts.js';

const getData = async(url) => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

const sendData = (url, formBody) => {
  fetch(url, {
    method: 'POST',
    body: formBody
  })
    .then((response) => (response.ok) ? viewAlertSuccess() : viewAlertError())
    .catch(() => viewAlertError());
};

export {getData, sendData};
