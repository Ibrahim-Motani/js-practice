const meanOfArray = array => {
  if (!array) throw "Supplied argument is not an array";
  if (!Array.isArray(array)) throw "Supplied argument is not an array";
  if (array.length < 1) throw "Supplied array is empty";
  if (!array.every(element => typeof element === "number"))
    throw "Supplied array consists of non numeric values";

  const sum = arr.reduce((acc, current) => (current = current + acc), 0);
  const result = sum / array.length;
  return result;
};

const medianOfSquares = array => {
  if (!array) throw "Supplied argument is not an array";
  if (!Array.isArray(array)) throw "Supplied argument is not an array";
  if (array.length < 1) throw "Supplied array is empty";
  if (!array.every(element => typeof element === "number"))
    throw "Supplied array consists of non numeric values";

  const sortedArray = array.sort((a, b) => a - b);

  if (array.length % 2 !== 0) {
    const medianIndex = Math.floor(sortedArray.length / 2);
    return sortedArray[medianIndex] ** 2;
  } else {
    const number1Index = sortedArray.length / 2 - 1;
    const number2Index = number1Index + 1;
    return ((sortedArray[number1Index] + sortedArray[number2Index]) / 2) ** 2;
  }
};

const maxElementInArray = array => {
  if (!array) throw "Supplied argument is not an array";
  if (!Array.isArray(array)) throw "Supplied argument is not an array";
  if (array.length < 1) throw "Supplied array is empty";

  let arrayValue = array[0];
  let index = 0;
  for (let i = 1; i < array.length; i++) {
    if (array[i] > arrayValue) {
      arrayValue = array[i];
      index = i;
    }
  }
  return { [arrayValue]: index };
};

const fillArray = (upperLimit, character) => {
  if (!upperLimit) throw "upperLimit parameter does not exist";
  if (!Number.isInteger(upperLimit)) throw "upperLimit parameter is not a number";
  if (upperLimit < 1) throw "upperLimit parameter is not a positive integer";

  if (Number.isInteger(upperLimit) && character === undefined) {
    const result = [];
    for (let i = 0; i < upperLimit; i++) result[i] = i;
    return result;
  }
  if (Number.isInteger(upperLimit) && typeof character === "string") {
    const result = [];
    for (let i = 0; i < upperLimit; i++) result[i] = character;
    return result;
  }
};

const countRepeating = array => {
  if (!array) throw "Supplied argument is not an array";
  if (!Array.isArray(array)) throw "Supplied argument is not an array";

  if (!array.length) return {};

  let flag = true;
  let countOfWords = {};
  for (let word of array) {
    if (word in countOfWords) countOfWords[word] = countOfWords[word] + 1;
    else {
      countOfWords[word] = 1;
      flag = false;
    }
  }

  if (!flag) {
    for (let word in countOfWords) {
      if (countOfWords[word] === 1) delete countOfWords[word];
    }
    return countOfWords;
  }
  return {};
};

const isEqual = (array1, array2) => {
  if (!array1 || !array2)
    throw "Supplied argument is not an array";
  if (!Array.isArray(array1) || !Array.isArray(array2))
    throw "Supplied argument is not an array";
  
  if (array1.length !== array2.length)
    return false;
  if (array1 === [] && array2 === [])
    return true;
  
  const sortedArr1 = array1.sort().map(element => {
    if (Array.isArray(element))
      return element.sort();
    return element;
  });
  const sortedArr2 = array2.sort().map(element => {
    if (Array.isArray(element)) return element.sort();
    return element;
  });

  let flag = true;
  for (let i = 0; i < sortedArr1.length; i++) {
    if (Array.isArray(sortedArr1[i]) && Array.isArray((sortedArr2[i]))) {
      for (let j = 0; j < sortedArr1[i].length; j++) {
        if (sortedArr1[i][j] !== sortedArr2[i][j]) flag = false;
      }
    } else {
      if (sortedArr1[i] !== sortedArr2[i])
        flag = false;
    }
  }

  if (flag)
    return true;
  return false;
};