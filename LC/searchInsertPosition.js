var searchInsert = function (nums, target) {
  // for (let i=0; i<nums.length; i++) {
  //   if (nums[i] >= target) return i;
  // }
  // return nums.length;

  let lp = 0;
  let rp = nums.length-1;

  while (lp <= rp) {
    const mid = Math.floor((lp + rp) / 2);
    if (nums[mid] === target) return mid;
    else if (nums[mid] > target) {
      rp = mid - 1;
    } else {
      lp = mid + 1;
    }
  }
  return lp;

};

const l1 = [1, 2, 3, 5, 6, 7];
const l2 = [1, 2, 3, 4, 5, 6, 7];
const l3 = [1, 3, 5, 7, 9];
const l4 = [];
const l5 = [1];

console.log(searchInsert(l1, 1), "Expected: 0");
console.log(searchInsert(l1, 2), "Expected: 1");
console.log(searchInsert(l1, 3), "Expected: 2");
console.log(searchInsert(l1, 5), "Expected: 3");
console.log(searchInsert(l1, 6), "Expected: 4");
console.log(searchInsert(l1, 7), "Expected: 5");
console.log(searchInsert(l1, 4), "Expected: 3");
console.log(searchInsert(l2, 8), "Expected: 7");
console.log(searchInsert(l3, 4), "Expected: 2");
console.log(searchInsert(l4, 4), "Expected: 0");
console.log(searchInsert(l5, 2), "Expected: 1");