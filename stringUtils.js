const camelCaseStr = string => {
  if (!string) throw "String does not exist";
  if (typeof string !== "string") throw "Not a valid string";
  if (string.trim().length < 1) throw "Empty string";

  const ans = string
    .split(" ")
    .map((characters, i) => {
      if (i == 0) {
        return characters.toLowerCase();
      }
      return (
        characters.charAt(0).toUpperCase() + characters.slice(1).toLowerCase()
      );
    })
    .join("");
  return ans;
};

const replaceChar = string => {
  if (!string) throw "String does not exist";
  if (typeof string !== "string") throw "Not a valid string";
  if (string.trim().length < 1) throw "Empty string";

  const StringToBeReplaced = string[0].toLowerCase();
  let modifiedString = string[0];
  let replacingChar = "*";
  for (let i = 1; i < string.length; i++) {
    if (string[i].toLowerCase() === StringToBeReplaced) {
      modifiedString += replacingChar;
      replacingChar = replacingChar === "*" ? "$" : "*";
    } else {
      modifiedString += string[i];
    }
  }

  return modifiedString;
};

const mashUp = (string1, string2) => {
  if (!string1 || !string2)
    throw "One of the two String does not exist or both of them do not exist";
  if (typeof string1 !== "string" || typeof string2 !== "string")
    throw "Not a valid string";
  if (string1.trim().length < 2 || string2.trim().length < 2)
    throw "String length is less than 2 characters";

  const modifiedString = `${string2[0]}${string2[1]}${string1.slice(2)} ${string1[0]}${
    string1[1]
  }${string2.slice(2)}`;
  return modifiedString;
};