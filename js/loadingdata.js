import { getRandomNum, getArrayElement, getTextMessage } from './util.js';

const MESSAGE_TEXTS = ['Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const MESSAGE_NAMES = ['Петя', 'Вася', 'Нина', 'Серёжа', 'Маша', 'Алёна'];

const DESCRIPTION_PHOTOS = ['Красивый дом', 'Широкая река', 'Крутой водопад', 'Осенний лес', 'Зимняя дорога', 'Портрет девушки'];

let commentID;
let photoID;

const Comment = function () {
  this.id = ++commentID;
  this.avatar = `img/avatar-${getRandomNum(1, 6)}.svg`;
  this.message = getTextMessage(MESSAGE_TEXTS);
  this.name = getArrayElement(MESSAGE_NAMES);
};

const Photo = function () {
  this.id = ++photoID;
  this.url = `photos/${this.id}.svg`;
  this.description = getArrayElement(DESCRIPTION_PHOTOS);
  this.likes = getRandomNum(15, 200);
  this.comments = new Comment();
};

const getPhotos = (count) => {
  commentID = 0;
  photoID = 0;
  const photos = [];
  for (let i = 1; i <= count; i++) {
    photos.push(new Photo());
  }
  return photos;
};

export {getPhotos};
