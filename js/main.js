/*const getRandomNum = (min, max) => {
  if (min >= 0 && max >= 0 && min < max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  throw new Error(`Используйте только положительные числа. Или превое число ${min} болше конечного ${max} !`);
};

getRandomNum(2, 5);

const getRandomNumCatch = (min, max) => {
  try {
    if (min <= 0 || max <= 0) {
      throw {
        name: 'NegativeNumber',
        message: 'Используйте только положительные числа'
      };
    } else if (max < min) {
      throw {
        name: 'UnequalNumber',
        message: `Некорректный диапазон ${min} болше ${max}!`
      };
    } else {
      return Math.floor(Math.random() * (max - min) + min);
    }
  } catch (error) {
    if (error.name === 'NegativeNumber') {
      throw error.message;
    } else if (error.name === 'UnequalNumber') {
      throw error.message;
    }
  }
};

getRandomNumCatch(2, 9);

const checkCommentLength = (comment, maxLength) => {
  const check = comment.length <= maxLength;
  return check;
};

checkCommentLength('hello', 5);
*/

/*------ Больше деталей -------*/

const messageTexts = ['Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const messageNames = ['Петя', 'Вася', 'Нина', 'Серёжа', 'Маша', 'Алёна'];

const descriptionPhotos = ['Красивый дом', 'Широкая река', 'Крутой водопад', 'Осенний лес', 'Зимняя дорога', 'Портрет девушки'];

let photoID = 0;
let commentID = 0;

const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const getElement = (arr) => arr[getRandomNum(0, arr.length - 1)];

const getTextMessage = (arr) => {
  let kol = getRandomNum(1, 2);
  let text = '';
  while (kol !== 0) {
    text += getElement(arr);
    kol--;
  }
  return text;
};

function getComment (id, avatar, message, name) {
  this.id = ++commentID;
  this.avatar = `img/avatar-${getRandomNum(1, 6)}.svg`;
  this.message = getTextMessage(messageTexts);
  this.name = getElement(messageNames);
}

function getPhoto (id, url, description, likes, comments) {
  this.id = ++photoID;
  this.url = `photos/${this.id}.svg`;
  this.description = getElement(descriptionPhotos);
  this.likes = getRandomNum(15, 200);
  this.comments = new getComment();
}

const getPhotos = (count) => {
  const photos = [];
  for (let i = 1; i <= count; i++) {
    photos.push(new getPhoto());
  }
  return photos;
};

getPhotos(25);
