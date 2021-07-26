var search = function (nums, target) {
  let add = 0;

  const helper = (nums, target) => {
    if (!nums.length) return -1;

    const pivot = Math.floor(nums.length / 2)

    if (nums[pivot] === target) {
      return pivot + add;
    }

    // Left side is sorted
    if (nums[0] < nums[pivot]) {
      // See if the target is on the left (sorted) side
      if (nums[0] <= target && target <= nums[pivot-1]) {
        return helper(nums.slice(0, pivot), target);
      } else {
        // If not, search the right side
        add += pivot;
        return helper(nums.slice(pivot, nums.length), target);
      }
    } else {
      // If we get here we know the right side is sorted
      // See if the target is in the right (sorted) side
      if (nums[pivot] <= target && target <= nums[nums.length-1]) {
        add += pivot;
        return helper(nums.slice(pivot, nums.length), target);
      } else {
        // If not, search the left side
        return helper(nums.slice(0, pivot), target);
      }
    }
  }

  return helper(nums, target)
};


l1 = [9, 10, 1, 2, 3, 4, 5, 6, 7, 8];
l2 = [9, 10, 1, 2, 3, 4, 5, 7, 8];
l3 = [5, 6, 7, 8, 9, 0, 1, 2, 3, 4];
l4 = [6, 7, 8, 9, 10, 0, 1, 2, 3, 4, 5];
l5 = [4, 5, 6, 7, 0, 1, 2];
l6 = [4, 5, 6, 7, 0, 1, 2];
l7 = [1];
l8 = [4, 5, 6, 7, 0, 1, 2];

// console.log(search(l1, 6), " Expect 7");
// console.log(search(l2, 6), "Expect -1");
// console.log(search(l3, 6), " Expect 1");
// console.log(search(l4, 6), " Expect 0");
// console.log(search(l5, 0), " Expect 4");
// console.log(search(l6, 3), "Expect -1");
// console.log(search([1], 1), " Expect 0");
console.log(search(l8, 2), " Expect 6");