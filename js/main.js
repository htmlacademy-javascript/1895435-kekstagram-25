const getRandomNum = (min, max) => {
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
