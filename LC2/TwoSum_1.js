const twoSum = (nums, target) => {
    // a + b = t
    // a = t - b
    const cache = {};
    for (let i=0; i<nums.length; i++) {
        const a = target - nums[i]
        if (a in cache) {
            return [cache[a], i];
        } else {
            cache[nums[i]] = i;
        }
    }
    return [];
}

l1 = [1, 3, 2, -4, 12, 9, 0];
t1 = 8;
l2 = [];
t2 = 1;
l3 = [1, 2, 3, 4, 5, 6, 7];
t3 = 100;
l4 = [2, 7, 11, 15];
t4 = 9;

// console.log(twoSum(l1, t1));
// console.log(twoSum(l2, t2));
// console.log(twoSum(l3, t3));
console.log(twoSum(l4, t4));