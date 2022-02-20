function getRandomNum (min, max) {
  try {
    if (min <= 0 || max <=0 ) {
      throw {
        name: 'NegativeNumber',
        message: 'Используйте только положительные числа'
      };
    } else if (max < min) {
      throw {
        name: 'UnequalNumber',
        message: `Некорректный диапазон ${  min  } болше ${  max  }!`
      };
    } else {
      return Math.floor(Math.random()*(max-min) + min);
    }
  } catch (error) {
    if (error.name === 'NegativeNumber') {
      throw error.message;
    } else if (error.name === 'UnequalNumber') {
      throw error.message;
    }
  }
}
getRandomNum (2, 5);

function checkCommentLength (comment, maxLength) {
  if (comment.length <= maxLength) {
    return comment.length <= maxLength;
  }
  return comment.length <= maxLength;
}

checkCommentLength('hello', 5);
