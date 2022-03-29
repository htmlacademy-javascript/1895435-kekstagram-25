const buttonSmaller = document.querySelector('.scale__control--smaller');
const buttonBigger = document.querySelector('.scale__control--bigger');
const scaleControl = document.querySelector('.scale__control--value');
const imgPreview = document.querySelector('.img-upload__preview');
const SCALE_RANGE = [25, 100];
const SCALE_STEP = 25;

function getScale (range) {
  let count = range[1];
  return {
    more:function() {
      if (count < range[1]) {
        count += SCALE_STEP;
      }
      return count;
    },
    less:function() {
      if (count > range[0]) {
        count -= SCALE_STEP;
      }
      return count;
    }
  };
}

let scale = getScale(SCALE_RANGE);

function getImageScale(val) {
  scaleControl.value = `${val}%`;
  imgPreview.style.transform = `scale(${val/100})`;
}

buttonSmaller.addEventListener('click', () => {
  getImageScale(scale.less());
});

buttonBigger.addEventListener('click', () => {
  getImageScale(scale.more());
});
