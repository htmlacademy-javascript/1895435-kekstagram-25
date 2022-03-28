import {getPhotos} from './loadingdata.js';
import {getMiniatures} from './miniatures.js';
import {openModalWindow} from './viewpicture.js';
import './uploadfile.js';
//import {Scale} from './changescale.js';

const photosData = getPhotos(25);

getMiniatures(photosData);

openModalWindow(photosData);

//const zn = Scale();


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

var makeCounter = function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  }
};
