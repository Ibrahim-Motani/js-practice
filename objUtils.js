const isObject = object => {
  return Object.prototype.toString.call(object) === "[object Object]";
};

const isEmpty = object => {
  return Object.keys(object).length === 0;
};

const makeArraysFromObject = array => {
  if (!array) throw "Array does not exist";
  if (!Array.isArray(array)) throw "Supplied argument is not an array";
  if (!array.length) throw "Supplied array is empty";
  if (array.length < 2) throw "Supplied array should have atleast 2 objects";
  if (!array.every(object => isObject(object)))
    throw "Elements in array are not object";
  if (array.every(object => isEmpty(object))) throw "Some objects are empty";

  const result = [];
  for (let object of array) {
    for (let key in object) {
      const temp = [];
      temp[0] = key;
      temp[1] = object[key];
      result.push(temp);
    }
  }
  return result;
};

const areDeepEqual = (object1, object2) => {
  if (!object1 || !object2) throw "Object does not exist";
  if (isObject(object1) === false || isObject(object2) === false)
    throw "Supplied arguments are not objects";

  for (let prop in object1) {
    if (object1.hasOwnProperty(prop)) {
      if (object2.hasOwnProperty(prop)) {
        if (typeof object1[prop] === "object") {
          if (!isDeepEqual(object1[prop], object2[prop])) return false;
        } else {
          if (object1[prop] !== object2[prop]) return false;
        }
      } else {
        return false;
      }
    }
  }
  return true;
};

const computeObject = (object, func) => {
  if (!object) throw "Object does not exist";
  if (!func) throw "Function does not exist";
  if (typeof func !== "function") throw "Supplied argument is not a function";
  if (!Object.values(object).every(value => typeof value === "number"))
    throw "Object values are not numbers";
  if (!isObject(object)) throw "Supplied argument is not an object";

  const result = {};
  for (let key in object) {
    result[key] = func(object[key]);
  }

  return result;
};