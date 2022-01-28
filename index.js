const {
  mean,
  maxElement,
  medianSquare,
  fill,
  countRepeating,
  isEqual,
} = require("./arrayUtils");
const { computeObj, isDeepEqual, makeArrays } = require("./objUtils");
const { mashUp, replaceChar, camelCase } = require("./stringUtils");

// mean
try {
    const meanOne = mean([2, 3, 4]);
    console.log('Mean passed succesfully');
} catch (error) {
    console.error('Mean failed test case');
}
try {
    const meanTwo = mean([]);
    console.log("Mean returned no error");
} catch (error) {
    console.log("Mean failed successfully");
}

// medianSquare
try {
    const medianSquareOne = medianSquare([4,1,2]);
    console.log('medianSquare passed succesfully');
} catch (error) {
    console.error('medianSquare failed test case');
}
try {
    const medianSquareTwo = medianSquare(1,2,3);
    console.log("medianSquare returned no error");
} catch (error) {
    console.log("medianSquare failed successfully");
}

// maxElement
try {
    const maxElementOne = maxElement([5,6,7]);
    console.log('maxElement passed succesfully');
} catch (error) {
    console.error('maxElement failed test case');
}
try {
    const maxElementTwo = maxElement("test");
    console.log("maxElement returned no error");
} catch (error) {
    console.log("maxElement failed successfully");
}

// fill
try {
    const fillOne = fill(3, 'Welcome');
    console.log('fill passed succesfully');
} catch (error) {
    console.error('fill failed test case');
}
try {
    const fillTwo = fill(0);
    console.log("fill returned no error");
} catch (error) {
    console.log("fill failed successfully");
}

// countRepeating
try {
    const countRepeatingOne = countRepeating([7, '7', 13, true, true, true, "Hello", "Hello", 'hello']);
    console.log('countRepeating passed succesfully');
} catch (error) {
    console.error('countRepeating failed test case');
}
try {
    const countRepeatingTwo = countRepeating("foobar");
    console.log("countRepeating returned no error");
} catch (error) {
    console.log("countRepeating failed successfully");
}

// isEqual
try {
    const isEqualOne = isEqual([1,2,3], [3,1,2]);
    console.log('isEqual passed succesfully');
} catch (error) {
    console.error('isEqual failed test case');
}
try {
    const isEqualTwo = isEqual([1,2,3]);
    console.log("isEqual returned no error");
} catch (error) {
    console.log("isEqual failed successfully");
}

// camelCase
try {
    const camelCaseOne = camelCase("my function rocks");
    console.log('camelCase passed succesfully');
} catch (error) {
    console.error('camelCase failed test case');
}
try {
    const camelCaseTwo = camelCase(123);
    console.log("camelCase returned no error");
} catch (error) {
    console.log("camelCase failed successfully");
}

// replaceChar
try {
    const replaceCharOne = replaceChar("Mommy");
    console.log('replaceChar passed succesfully');
} catch (error) {
    console.error('replaceChar failed test case');
}
try {
    const replaceCharTwo = replaceChar("");
    console.log("replaceChar returned no error");
} catch (error) {
    console.log("replaceChar failed successfully");
}

// mashUp
try {
    const mashUpOne = mashUp("Patrick", "Hill");
    console.log('mashUp passed succesfully');
} catch (error) {
    console.error('mashUp failed test case');
}
try {
    const mashUpTwo = mashUp("h", "e");
    console.log("mashUp returned no error");
} catch (error) {
    console.log("mashUp failed successfully");
}

// makeArrays
try {
    const makeArraysOne = makeArrays([{a: 70, x: 4, z: 5}, {x: 0, y: 9, q: 10}]);
    console.log('makeArrays passed succesfully');
} catch (error) {
    console.log(error);
    console.error('makeArrays failed test case');
}
try {
    const makeArraysTwo = makeArrays();
    console.log("makeArrays returned no error");
} catch (error) {
    console.log("makeArrays failed successfully");
}

// isDeepEqual
try {
    const isDeepEqualOne = isDeepEqual({a: 2, b: 3}, {a: 2, b: 3});
    console.log('isDeepEqual passed succesfully');
} catch (error) {
    console.error('isDeepEqual failed test case');
}
try {
    const isDeepEqualTwo = isDeepEqual({ a: 2, b: 3 });
    console.log("isDeepEqual returned no error");
} catch (error) {
    console.log("isDeepEqual failed successfully");
}

// computeObj
try {
    const computeObjOne = computeObj({a: 2, b: 3}, n => n * 2);
    console.log('computeObj passed succesfully');
} catch (error) {
    console.error('computeObj failed test case');
}
try {
    const computeObjTwo = computeObj({ a: 2, b: 3 });
    console.log("computeObj returned no error");
} catch (error) {
    console.log("computeObj failed successfully");
}