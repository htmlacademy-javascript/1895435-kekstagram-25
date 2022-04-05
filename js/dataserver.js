const showAlert = (message) => {
  alert(message);
};
/*
const getPhotos = async (fn1, fn2) => {
  try {
    fetch('https://25.javascript.pages.academy/kekstagram/data1')
      //.then((res) => res.ok ? res : Promise.reject(res))
      .then((response) => response.json())
      .then((photos) => {
        fn1(photos);
        fn2(photos);
      });
  } catch(err) {
    showAlert('Hello');
    console.error('Hello', err);
  }
};
*/
const getPhotos = async(url) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw showAlert('Data');
  }
  const data = await res.json();
  return data;
};

export {getPhotos};
