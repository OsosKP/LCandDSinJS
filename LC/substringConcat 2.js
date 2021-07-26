// You are given a string s and an array of strings words of the same length.
// Return all starting indices of substring(s) in s that is a concatenation of each
//     word in words exactly once, in any order, and without any intervening characters.

const findSubstring = (s, words) => {
    console.log(s);
    console.log(`-----String length: ${s.length}-----`);
    const result = [];
    const length = words[0].length;
    const wordCache = words.reduce((obj, word) => {
        obj[word] = false;
        return obj;
    }, {});
    const windowLength = length * words.length;
    if (windowLength > s.length) return [];

    const counts = {};

    let lp = 0;
    let rp = lp;
    while (rp < s.length) {
        const word = s.substring(rp, rp + length);
        counts[word] = counts[word] + 1 || 1;

        if (counts[word] === 0) {
            if (getSum(counts) === 0) result.push(lp);
        }

        rp += length;
    }
    console.log(counts);
    console.log("DONE");
}

const getSum = (counts) => {
    return Object.values(counts).reduce((a, b) => a + b, 0);
}

const s1 = "barfoothefoobarman";
const w1 = ["foo", "bar"];
const s2 = "wordgoodgoodgoodbestword";
const w2 = ["word", "good", "best", "word"];
const s3 = "barfoofoobarthefoobarman";
const w3 = ["bar", "foo", "the"];

console.log(findSubstring(s1, w1));
// console.log(findSubstring(s2, w2));
// console.log(findSubstring(s3, w3));