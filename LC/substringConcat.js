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

    while (j < s.length) {
        console.log((j - i) < windowLength);
        const endWord = s.substring(j, j + wordLength);
        console.log(endWord);
        j += wordLength;

        if (endWord in map) {
            map[endWord]--;
            if (map[endWord] === 0) count--;
        }

        if (count > 0 && (j-i) <= windowLength) continue;

        while (count === 0 || (j - i) > windowLength) {
            const startWord = s.substring(i, i + wordLength);
            console.log(`\tStart word: ${startWord}`);
            i += wordLength;
            if (startWord in map) {
                map[startWord]++;
                if (map[startWord] > 0) count ++;
            }
            console.log(`\t${map}`);
        }

        result.push(i-wordLength);
    }
    return result;
}



s1 = "barfoothefoobarman";
words1 = ["foo", "bar"];
s2 = "wordgoodgoodgoodbestword";
words2 = ["word", "good", "best", "word"];
s3 = "barfoofoobarthefoobarman";
words3 = ["bar", "foo", "the"];
s4 = "wordgoodgoodgoodbestword";
words4 = ["word","good","best","good"];

// console.log(findSubstring(s1, words1));
// console.log(findSubstring(s2, words2));
// console.log(findSubstring(s3, words3));
console.log(findSubstring(s4, words4));