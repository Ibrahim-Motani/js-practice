const questionOne = function questionOne(arr) {
  const ans = arr.reduce((acc, curr) => acc = acc + curr ** 2, 0);
  return ans;
}

const questionTwo = function questionTwo(index) {
  if (index <= 0) {
    return 0;
  } else if (index == 1) {
    return 1;
  } else {
    return questionTwo(index - 1) + questionTwo(index - 2);
  }
}

const questionThree = function questionThree(str) {
  vowels = "aeiou";
  result3 = 0;
  let str1 = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < str1.length; j++) {
      if (str1[i] == vowels[j]) {
        result3 += 1;
      } else {
        result3;
      }
    }
  }
  return result3;
}


const questionFour = function questionFour(fact) {
  if (fact < 0) {
    return "NaN";
  } else if (fact == 0 || fact == 1) {
    return 1;
  } else {
    return questionFour(fact - 1) * fact;
  }
}

module.exports = {
  firstName: "Kevinkumar",
  lastName: "Bhingaradiya",
  studentId: "20009173",
  questionOne,
  questionTwo,
  questionThree,
  questionFour,
};