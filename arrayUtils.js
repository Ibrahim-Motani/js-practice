const mean = arr => {
  if (!arr) throw "Supplied argument is not an array";
  if (!Array.isArray(arr)) throw "Supplied argument is not an array";
  if (arr.length < 1) throw "Supplied array is empty";
  if (!arr.every(element => typeof element === "number"))
    throw "Supplied array consists of non numeric values";

  const total = arr.reduce((acc, current) => (current = current + acc), 0);
  const ans = total / arr.length;
  return ans;
};

const medianSquare = arr => {
  if (!arr) throw "Supplied argument is not an array";
  if (!Array.isArray(arr)) throw "Supplied argument is not an array";
  if (arr.length < 1) throw "Supplied array is empty";
  if (!arr.every(element => typeof element === "number"))
    throw "Supplied array consists of non numeric values";

  const sortedArray = arr.sort((a, b) => a - b);

  if (arr.length % 2 !== 0) {
    const medianIndex = Math.floor(sortedArray.length / 2);
    return sortedArray[medianIndex] ** 2;
  } else {
    const number1Index = sortedArray.length / 2 - 1;
    const number2Index = number1Index + 1;
    const number1 = sortedArray[number1Index];
    const number2 = sortedArray[number2Index];
    return ((number1 + number2) / 2) ** 2;
  }
};

const maxElement = arr => {
  if (!arr) throw "Supplied argument is not an array";
  if (!Array.isArray(arr)) throw "Supplied argument is not an array";
  if (arr.length < 1) throw "Supplied array is empty";

  let arrayValue = arr[0];
  let index = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arrayValue) {
      arrayValue = arr[i];
      index = i;
    }
  }
  return { [arrayValue]: index };
};

const fill = (end, value) => {
  if (!end) throw "End parameter does not exist";
  if (!Number.isInteger(end)) throw "End parameter is not a number";
  if (end < 1) throw "End parameter is not a positive integer";

  if (Number.isInteger(end) && value === undefined) {
    const ans = [];
    for (let i = 0; i < end; i++) ans[i] = i;
    return ans;
  }
  if (Number.isInteger(end) && typeof value === "string") {
    const ans = [];
    for (let i = 0; i < end; i++) ans[i] = value;
    return ans;
  }
};

const countRepeating = arr => {
  if (!arr) throw "Supplied argument is not an array";
  if (!Array.isArray(arr)) throw "Supplied argument is not an array";

  if (!arr.length) return {};

  let flag = false;
  let countOfWords = {};
  for (let word of arr) {
    if (word in countOfWords) countOfWords[word] = countOfWords[word] + 1;
    else {
      countOfWords[word] = 1;
      flag = true;
    }
  }

  if (flag) {
    for (let word in countOfWords) {
      if (countOfWords[word] === 1) delete countOfWords[word];
    }
    return countOfWords;
  }
  return {};
};

const isEqual = (arr1, arr2) => {
  if (!arr1 || !arr2)
    throw "Supplied argument is not an array";
  if (!Array.isArray(arr1) || !Array.isArray(arr2))
    throw "Supplied argument is not an array";
  
  if (arr1.length !== arr2.length)
    return false;
  if (arr1 === [] && arr2 === [])
    return true;
  
  const sortedArr1 = arr1.sort().map(element => {
    if (Array.isArray(element))
      return element.sort();
    return element;
  });
  const sortedArr2 = arr2.sort().map(element => {
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