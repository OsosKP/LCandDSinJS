var strStr = function (haystack, needle) {
  if (!needle.length) return 0;
  for (let i=0; i<haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      if (haystack.slice(i, i+needle.length) === needle) {
        return i;
      }
    }
  }
  return -1;
};

console.log(strStr("hello", "ll"));
console.log(strStr("hello", "hello"));
console.log(strStr("hel", "ll"));
console.log(strStr("hell", ""));
console.log(strStr("what is up my frienderino", "iend"));
console.log(strStr("hello", "p"));
console.log(strStr("", ""));