const minSubArrayLen = (target, nums) => {
    let total = 0;
    let i = 0, j = 0;
    let minWindowLength = Infinity;

    while (j < nums.length) {
        total += nums[j++];

        while (total >= target) {
            const windowLength = j - i;
            minWindowLength = Math.min(minWindowLength, windowLength);
            total -= nums[i++];
        }
    }
    return minWindowLength < Infinity ? minWindowLength : 0;
};

t1 = 7;
n1 = [2, 3, 1, 2, 4, 3];
t2 = 4;
n2 = [1, 4, 4];
t3 = 11;
n3 = [1, 1, 1, 1, 1, 1, 1, 1];
t4 = 213;
n4 = [12, 28, 83, 4, 25, 26, 25, 2, 25, 25, 25, 12];

console.log(minSubArrayLen(t1, n1));
console.log(minSubArrayLen(t2, n2));
console.log(minSubArrayLen(t3, n3));
console.log(minSubArrayLen(t4, n4));