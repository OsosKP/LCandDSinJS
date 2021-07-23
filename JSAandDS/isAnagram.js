const isAnagram = (string1, string2) => {
  if (string1.length !== string2.length) return false;

  const letterCache = {}

  for (let char of string1) {
    letterCache[char] ? letterCache[char]++ : letterCache[char] = 1;
  }
  for (let char of string2) {
    if (!letterCache[char]) return false;
    letterCache[char] -= 1;
  }
  return true;
}

const string = "iamlordvoldemort";
const anagram = "tommarvoloriddle";
const notAnagram = "iamlorgvoldemort";

console.log(isAnagram(string, anagram));
console.log(isAnagram(string, notAnagram));