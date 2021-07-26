const l1 = [1, 1, 2];
const l2 = [1, 1, 2, 2, 3, 3, 3, 4, 5, 6, 6, 6, 6, 7];
const l3 = [1, 2];
const l4 = [1];
const l5 = [];
const l6 = [1, 2, 3, 4, 5, 6];

// const removeDuplicates = (nums) => {
//   return nums.filter((num, index) => num !== nums[index-1]);
// };

// const removeDuplicates = (nums) => {
//   return nums.reduce((result, element) => {
//     if (element !== result[result.length-1]) result.push(element);
//     return result;
//   }, [])
// };

// console.log(removeDuplicates(l1));
// console.log(removeDuplicates(l2));
// console.log(removeDuplicates(l3));
// console.log(removeDuplicates(l4));
// console.log(removeDuplicates(l5));
// console.log(removeDuplicates(l6));

const removeDuplicatesInPlace = (nums) => {
  for (let i=1; i<nums.length; i++) {
    if (nums[i] === nums[i-1]) {
      nums.splice(i, 1);
      i--;
    }
  }
}

removeDuplicatesInPlace(l1);
removeDuplicatesInPlace(l2);
removeDuplicatesInPlace(l3);
removeDuplicatesInPlace(l4);
removeDuplicatesInPlace(l5);
removeDuplicatesInPlace(l6);

console.log(l1);
console.log(l2);
console.log(l3);
console.log(l4);
console.log(l5);
console.log(l6);
