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
  if (!end)
    throw "End parameter does not exist";
  if (!Number.isInteger(end))
    throw "End parameter is not a number";
  if (end < 1)
    throw "End parameter is not a positive integer";

  if (Number.isInteger(end) && value === undefined) {
    const ans = [];
    for (let i = 0; i < end; i++) 
      ans[i] = i;
    return ans;
  }
  if (Number.isInteger(end) && typeof value === 'string') {
    const ans = [];
    for (let i = 0; i < end; i++) ans[i] = value;
    return ans;
  }
};