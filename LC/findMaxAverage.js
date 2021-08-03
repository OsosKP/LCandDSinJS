const findMaxAverage = (nums, k) => {
    let i = 0, j = 0;
    let maxAvg = -Infinity;
    let total = 0;

    while (j < nums.length) {
        while ((j-i) < k) {
            total += nums[j++];
        }
        maxAvg = Math.max((total / k), maxAvg);

        total -= nums[i++];
    }
    return maxAvg;
};

n1 = [1, 12, -5, -6, 50, 3];
k1 = 4;
n2 = [5];
k2 = 1;
n3 = [1, 4, 2, 0, 9, 10, 2, 0, 1, 3, 5, 1, 3, 2];
k3 = 3;

console.log(findMaxAverage(n1, k1));
console.log(findMaxAverage(n2, k2));
console.log(findMaxAverage(n3, k3));