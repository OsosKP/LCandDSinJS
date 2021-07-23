const fullJustify = (words, maxWidth) => {
    const result = [];
    let i = 0;
    let totalWords = words.length;

    const leftJustify = (words, diff, i, j) => {
        const spacesOnRight = diff - (j - i - 1);
        let result = words[i];
        for (let k = i + 1; k < j; k++) {
            result += ` ${words[k]}`
        }
        result += " ".repeat(spacesOnRight);

        return result;
    }

    const middleJustify = (words, diff, i, j) => {
        // Number of sections of spaces
        const spacesNeeded = (j - i - 1);
        // Number of spaces per section
        const spaces = diff / spacesNeeded;
        // Number of spaces left over
        let extraSpaces = diff % spacesNeeded;
        let result = words[i];
        for (let k=i+1; k < j; k++) {
            const spacesToApply = spaces + (extraSpaces-- > 0 ? 1 : 0);
            result += `${" ".repeat(spacesToApply)}${words[k]}`;
        }

        return result;
    }

    while (i < totalWords) {
        let j = i + 1;
        let lineLength = words[i].length;

        // Keep adding words while we're under the max line length
        while (j < totalWords && (lineLength + words[j].length + (j - i - 1)) < maxWidth) {
            lineLength += words[j].length;
            j++;
        }

        // Number of spaces we need to apply
        let diff = maxWidth - lineLength;
        let numberOfWordsInLine = j - i;
        let line;
        if (numberOfWordsInLine === 1 || j >= totalWords) {
            line = leftJustify(words, diff, i, j);
        } else {
            line = middleJustify(words, diff, i, j);
        }
        result.push(line)
        i = j;
    }
    return result.join("\n");
}

const l1 = ["what", "will", "be", "acknowledgment", "will", "be"];
const m1 = 15;
const l2 = ["This", "is", "an", "example", "of", "text", "justification."]
const m2 = 16

console.log(fullJustify(l1, m1));
console.log(fullJustify(l2, m2));