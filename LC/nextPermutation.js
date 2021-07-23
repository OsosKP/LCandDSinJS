const l1 = [1, 2, 3, 4];  // 1, 2, 4, 3
const l2 = [4, 3, 2, 1];  // 1, 2, 3, 4
const l3 = [1, 2, 4, 3];  // 1, 3, 2, 4   ->  [1, 4, 2, 3] -> [1, 4, 3, 2]
const l4 = [1];
const l5 = []
const l6 = [1, 4, 2, 3, 5, 6, 7]; // 1, 4, 2, 3, 5, 7, 6
const l7 = [1, 5, 4, 3, 2]; // 2, 1, 3, 4, 5

const l8 = [1, 5, 1]

const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];

const nextPermutation = (nums) => {
  let i = nums.length-2;
  while (nums[i]>=nums[i+1]) i--;
  let j = nums.length-1;
  let marker = i;
  i++;
  while (i < j) {
    swap(nums, i, j);
    i++;
    j--;
  }
  // If we didn't need to reset the entire thing, aka 4321 -> 1234
  if (marker >= 0) {
    j = marker+1;
    while (nums[j] <= nums[marker]) j++;
    swap(nums, marker, j);
  }
}

nextPermutation(l1);
nextPermutation(l2);
nextPermutation(l3);
nextPermutation(l4);
nextPermutation(l5);
nextPermutation(l6);
nextPermutation(l7);
nextPermutation(l8);

console.log(l1);
console.log(l2);
console.log(l3);
console.log(l4);
console.log(l5);
console.log(l6);
console.log(l7);
console.log(l8);