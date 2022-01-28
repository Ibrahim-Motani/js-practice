const camelCase = str => {
  if (!str) throw "String does not exist";
  if (typeof str !== "string") throw "Not a valid string";
  if (str.trim().length < 1) throw "Empty string";

  const wordArray = str.split(" ");
  const convertedWords = wordArray.map((characters, i) => {
    if (i == 0) {
      return characters.toLowerCase();
    }
    return (
      characters.charAt(0).toUpperCase() + characters.slice(1).toLowerCase()
    );
  });
  const convertedString = convertedWords.join("");

  return convertedString;
};

const replaceChar = str => {
  if (!str) throw "String does not exist";
  if (typeof str !== "string") throw "Not a valid string";
  if (str.trim().length < 1) throw "Empty string";

  const StringToBeReplaced = str[0].toLowerCase();
  let modifiedString = str[0];
  let replacingChar = "*";
  for (let i = 1; i < str.length; i++) {
    if (str[i].toLowerCase() === StringToBeReplaced) {
      modifiedString += replacingChar;
      replacingChar = replacingChar === "*" ? "$" : "*";
    } else {
      modifiedString += str[i];
    }
  }

  return modifiedString;
};

const mashUp = (str1, str2) => {
  if (!str1 || !str2)
    throw "One of the two String does not exist or both of them do not exist";
  if (typeof str1 !== "string" || typeof str2 !== "string")
    throw "Not a valid string";
  if (str1.trim().length < 2 || str2.trim().length < 2)
    throw "String length is less than 2 characters";

  const modifiedString = `${str2[0]}${str2[1]}${str1.slice(2)} ${str1[0]}${
    str1[1]
  }${str2.slice(2)}`;
  return modifiedString;
};

module.exports = { camelCase, replaceChar, mashUp };