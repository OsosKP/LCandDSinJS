const countUniqueValues = (arr) => {
  if (!arr.length) return 0;
  let i = 0;
  for (let j=1; j<arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  // Return the length of the section up to and including i, so need i+1
  return i+1;
}

const arr1 = [1, 1, 2, 3, 3, 4, 5, 6, 6, 7];
const arr2 = [1, 1, 2, 2, 3, 3, 4, 4];

console.log(countUniqueValues(arr1));
console.log(countUniqueValues(arr2));
console.log(countUniqueValues([]));