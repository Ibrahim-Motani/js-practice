const isObject = obj => {
  return Object.prototype.toString.call(obj) === "[object Object]";
};

const isEmpty = obj => {
  return Object.keys(obj).length === 0;
};

const makeArrays = arr => {
  if (!arr) throw "Array does not exist";
  if (!Array.isArray(arr)) throw "Supplied argument is not an array";
  if (!arr.length) throw "Supplied array is empty";
  if (arr.length < 2) throw "Supplied array should have atleast 2 objects";
  if (!arr.every(obj => isObject(obj)))
    throw "Elements in array are not object";
  if (arr.every(obj => isEmpty(obj))) throw "Some objects are empty";

  const result = [];
  for (let obj of arr) {
    for (let key in obj) {
      const temp = [];
      temp[0] = key;
      temp[1] = obj[key];
      result.push(temp);
    }
  }
  return result;
};

const isDeepEqual = (obj1, obj2) => {
  if (!obj1 || !obj2) throw "Object does not exist";
  if (isObject(obj1) === false || isObject(obj2) === false)
    throw "Supplied arguments are not objects";

  for (let prop in obj1) {
    if (obj1.hasOwnProperty(prop)) {
      if (obj2.hasOwnProperty(prop)) {
        if (typeof obj1[prop] === "object") {
          if (!isDeepEqual(obj1[prop], obj2[prop])) return false;
        } else {
          if (obj1[prop] !== obj2[prop]) return false;
        }
      } else {
        return false;
      }
    }
  }
  return true;
};

const computeObj = (obj, func) => {
  if (!obj) throw "Object does not exist";
  if (!func) throw "Function does not exist";
  if (typeof func !== "function") throw "Supplied argument is not a function";
  if (!Object.values(obj).every(value => typeof value === "number"))
    throw "Object values are not numbers";
  if (!isObject(obj)) throw "Supplied argument is not an object";

  const result = {};
  for (let key in obj) {
    result[key] = func(obj[key]);
  }

  return result;
};

module.exports = { makeArrays, isDeepEqual, computeObj };