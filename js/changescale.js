const buttonLess = document.querySelector('.scale__control--smaller');
const buttonMore = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
const SCALE_RANGE = [25, 100];
const SCALE_STEP = 25;

function Scale (val) {
  let count = val;
  return {
    more:function() {
      count +=25;
    },
    less:function() {
      count -=25;
    },
    value:function() {
      return count;
    }
  };
}

export {Scale};
