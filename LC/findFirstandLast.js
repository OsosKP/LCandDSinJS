var searchRange = function (nums, target) {
  let lp = 0;
  let rp = nums.length - 1;

  while (lp <= rp) {
    if (nums[lp] !== target) lp++;
    if (nums[rp] !== target) rp--;
    if (nums[lp] === target && nums[rp] === target) {
      return [lp, rp];
    }
  }
  return [-1, -1]
};

const pos1 = [1, 2, 3, 3, 4, 4, 5, 6];
const pos2 = [3]
const neg1 = [1, 2, 4, 5, 6];
const neg2 = [1];
const neg3 = []

console.log(searchRange(pos1, 3));
console.log(searchRange(pos2, 3));
console.log(searchRange(neg1, 3));
console.log(searchRange(neg2, 3));
console.log(searchRange(neg3, 3));
