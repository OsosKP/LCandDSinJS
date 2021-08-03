const minWindow = (s, t) => {
    if (t.length > s.length) return "";
    const charMap = t.split("").reduce((counts, char) => {
        counts[char] = counts[char] + 1 || 1;
        return counts;
    }, {});

    let i = 0, j = 0;
    let count = Object.values(charMap).length;
    let left = 0, right = s.length - 1;
    let min = s.length;
    let found = false;

    while (j < s.length) {
        if (s[j] in charMap) {
            charMap[s[j]]--;
            if (charMap[s[j]] === 0) {
                count--;
            }
        }
        j++;

        while (count === 0) {
            const windowLength = j - i;
            if (windowLength <= min) {
                found = true;
                left = i;
                right = j;
                min = windowLength;
            }
            min = Math.min(min, windowLength);
            // Move i up to get rid of extra chars
            if (s[i] in charMap) {
                charMap[s[i]]++;
                if (charMap[s[i]] > 0) {
                    count++;
                }
            }
            i++;
        }
    }
    return found ? s.substring(left, right) : "";
}

const print = (s, i, j) => {
    console.log(s);
    let line = "";
    let count = 0;
    while (count++ < i) line += " ";
    line += i;
    while (count++ < j) line += " ";
    line += j;
    console.log(line);
}

s1 = 'ADOBECODEBANC';
t1 = 'ABC'
s2 = 'a';
t2 = 'a'
s3 = 'a';
t3 = 'aa'
s4 = 'bbbbb';
t4 = 'a'

console.log(minWindow(s1, t1));
console.log(minWindow(s2, t2));
console.log(minWindow(s3, t3));
console.log(minWindow(s4, t4));