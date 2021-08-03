const threeSum = (nums) => {
    nums.sort((a, b) => a - b);
    const result = [];
    let left, right;
    for (let i=0; i< nums.length; i++) {
        // Skip duplicates of i, covered already by left pointer
        if (i >= 0 && nums[i] === nums[i-1]) continue;
        left = i + 1;
        right = nums.length - 1;
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right]
            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                left++;
                while (left < right && nums[left] === nums[left - 1]) left++;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }
    return result;
}

l1 = [-1, 0, 1, 2, -1, -4];
l2 = [0, 0, 0, 0];
// -4, -1, -1, 0, 1, 2
//      -  -         -  Add to list, then increment left
//      -      -     -  Too high - decrement right
//      -      -  -     Add to list, then increment left
//      -         =     left === right, increment i

console.log(threeSum(l1));
console.log(threeSum(l2));
console.log(threeSum([]));
console.log(threeSum([0]));