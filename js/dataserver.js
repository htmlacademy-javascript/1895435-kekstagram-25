const getData = async(url, cb1, cb2) => {
  const res = await fetch(url);
  const data = await res.json();
  cb1(data);
  cb2(data);
};

const sendData = (url, formBody) => {
  fetch(url, {
    method: 'POST',
    body: formBody
  })
    .catch(()=> alert('Hello'));
};

export {getData, sendData};
