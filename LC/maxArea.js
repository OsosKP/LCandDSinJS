var maxArea = function (height) {
    const start = performance.now();
    let i = 0;
    let j = height.length - 1;
    let water = 0;

    while (i < j) {
        water = Math.max(water, (j-i) * Math.min(height[i], height[j]));
        if (height[i] < height[j]) i++;
        else j--;
    }
    console.log(performance.now() - start);
    return water;
};

const l1 = [1, 8, 6, 2, 5, 4, 8, 3, 7];
const l2 = [1, 1];
const l3 = [4, 3, 2, 1, 4];
const l4 = [1, 2, 1];

console.log(maxArea(l1));
console.log(maxArea(l2));
console.log(maxArea(l3));
console.log(maxArea(l4));