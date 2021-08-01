const print = (string, i, j, count, map) => {
    console.log("--------------------");
    console.log(string + "\t\t" + count);
    console.log(`${" ".repeat(i)}i${" ".repeat(j - i - 1)}j`);
    console.log(map);
}

const findSubstring = (s, words) => {
    const map = words.reduce((map, word) => {
        map[word] = map[word] + 1 || 1;
        return map;
    }, {});

    const result = [];
    let count = words.length;
    const wordLength = words[0].length;
    const windowLength = wordLength * words.length;
    let i = 0, j = 0;

    while (j <= s.length) {
        while ((j - i) < windowLength) {
            const endWord = s.substring(j, j + wordLength);
            j += wordLength;
            if (endWord in map) {
                map[endWord]--;
                if (map[endWord] === 0) count--;
                // print(s, i, j, count, map);
            }
        }

        if (count === 0) {
            result.push(i);
        }

        const startWord = s.substring(i, i + wordLength);
        i += wordLength;
        if (startWord in map) {
            map[startWord]++;
            if (map[startWord] > 0) count++;
        }
    }
    return result;
}

s1 = "barfoothefoobarman";
words1 = ["foo", "bar"];
s2 = "wordgoodgoodgoodbestword";
words2 = ["word", "good", "best", "word"];
s3 = "barfoofoobarthefoobarman";
words3 = ["bar", "foo", "the"];
s4 = "wordgoodgoodgoodbestword";    // Expect [8]
words4 = ["word", "good", "best", "good"];

console.log(findSubstring(s1, words1));
console.log(findSubstring(s2, words2));
console.log(findSubstring(s3, words3));
console.log(findSubstring(s4, words4));