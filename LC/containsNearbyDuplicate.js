const containsNearbyDuplicate = (nums, k) => {
    let lp = 0;
    let rp = lp;

    const cache = {};
    while (rp < nums.length) {
        // Still looking for a duplicate
        if (!(nums[rp] in cache)) {
            cache[nums[rp]] = rp;
            rp++;
        // Our window is too wide
        } else if (Math.abs(rp - lp) > k) {
            delete cache[nums[lp]];
            lp++;
        // Found a duplicate, within the right range
        } else if (nums[rp] in cache && Math.abs(rp - cache[nums[rp]]) <= k) {
            return true;    
        }
    }
    return false;
};

l1 = [1, 2, 3, 1];
k1 = 3;
l2 = [1, 0, 1, 1];
k2 = 1;
l3 = [1, 2, 3, 1, 2, 3];
k3 = 2;

console.log(containsNearbyDuplicate(l1, k1));
console.log(containsNearbyDuplicate(l2, k2));
console.log(containsNearbyDuplicate(l3, k3));



// const containsNearbyDuplicate = (nums, k) => {
//     let lp = 0;
//     let rp = lp;

//     const cache = {};
//     while (rp < nums.length) {
//         while (!(nums[rp] in cache) && rp < nums.length) {
//             cache[nums[rp]] = rp;
//             rp++;
//         }
//         if (Math.abs(rp - cache[nums[rp]]) <= k) {
//             return true;
//         } else {
//             while(Math.abs(rp - lp) > k) {
//                 delete cache[nums[lp]];
//                 lp++;
//             }
//         }
//     }
//     return false;
// };

// l1 = [1,2,3,1];
// k1 = 3;
// l2 = [1,0,1,1];
// k2 = 1;
// l3 = [1,2,3,1,2,3];
// k3 = 2;

// console.log(containsNearbyDuplicate(l1, k1));
// console.log(containsNearbyDuplicate(l2, k2));
// console.log(containsNearbyDuplicate(l3, k3));