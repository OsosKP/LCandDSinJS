const twoSum = (numbers, target) => {
    let sum;
    let lp = 0, rp = numbers.length - 1;
    while (lp < rp) {
        sum = numbers[lp] + numbers[rp];
        if (sum === target) return [lp + 1, rp + 1];
        else if (sum < target) lp++;
        else rp--;
    }
    return [];
}

l1 = [1, 2, 3, 10, 11, 14, 15];
t1 = 21;
l2 = [];
t2 = 1;
l3 = [1, 2, 3, 4, 5, 6, 7];
t3 = 100;
l4 = [2, 7, 11, 15];
t4 = 9;

console.log(twoSum(l1, t1));
console.log(twoSum(l2, t2));
console.log(twoSum(l3, t3));
console.log(twoSum(l4, t4));