const minWindow = (s, t) => {
    if (!s.length || !t.length) return "";

    const characterMap = t.split("").reduce((counts, el) => {
        counts[el] = (counts[el] + 1) || 1;
        return counts;
    }, {});

    let i = 0;
    let j = 0;
    let count = Object.values(characterMap).length;
    let left = 0, right = s.length - 1;
    let min = s.length;
    let found = false;

    while (j < s.length) {
        const endChar = s[j++];
        if (endChar in characterMap) {
            characterMap[endChar]--;
            if (characterMap[endChar] === 0) count--;
        }

        // Have not successfully found a window substring
        if (count > 0) continue;

        // We have a window substring but it might not be min
        while (count === 0) {
            const startChar = s[i++];
            if (startChar in characterMap) {
                characterMap[startChar]++;
                if (characterMap[startChar] > 0) count++;
            }
        }

        // Shaved off all unnecessary characters
        if ((j - i) < min) {
            left = i;
            right = j;
            min = j - i;
            found = true;
        }
    }
    return found ? s.substring(left - 1, right) : "";
}

const s1 = "adobecodebanc";
const t1 = "abc";
const s2 = "ab";
const t2 = "a";

console.log(minWindow(s2, t2));