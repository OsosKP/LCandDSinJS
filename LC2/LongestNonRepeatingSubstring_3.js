const lengthOfLongestSubstring = (s) => {
    let maxLength = 0;
    const seen = {};
    let i = 0;
    let j = 0;
    while (j < s.length) {
        if (!seen[s[j]]) {
            seen[s[j]] = true;
            maxLength = Math.max(j - i + 1, maxLength);
            j++;
        } else {
            seen[s[i]] = false;
            i++;
        }
    }
    return maxLength;
}

const l1 = 'abcabcbb';
const t1 = 3;
const l2 = 'bbbb';
const t2 = 1;
const l3 = 'pwwkew';
const t3 = 3;
const l4 = '';
const t4 = 0;

console.log(lengthOfLongestSubstring(l1));
console.log(lengthOfLongestSubstring(l2));
console.log(lengthOfLongestSubstring(l3));
console.log(lengthOfLongestSubstring(l4));