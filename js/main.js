function getRandomNum (min, max) {
  if (min>=0 && max>=0) {
    return Math.floor(Math.random()*(max-min) + min);
  }
  return ('Используйте только положительные числа');
}

getRandomNum (2, 5);

function checkCommentLength (comment, maxLength) {
  if (comment.length <= maxLength) {
    return true;
  }
  return false;
}

checkCommentLength('hello', 5);
