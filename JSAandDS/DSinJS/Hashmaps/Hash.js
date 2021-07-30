const key = "hello";
const arrayLen = 13;

const hash1 = (key, arrayLen) => {
    let total = 0;
    for (char of key) {
        const value = char.charCodeAt(0) - 96;
        total = (total + value) % arrayLen;
    }
    return total;
}

// Less time, more uniform
const hash2 = (key, arrayLen) => {
    let total = 0;
    const WEIRD_PRIME = 31;
    for (let i=0; i< Math.min(key.length, 100); i++) {
        const char = key[i];
        const value = char.charCodeAt(0) - 96;
        total = (total + WEIRD_PRIME + value) % arrayLen;
    }
    return total;
}

const hash = (key, arrayLen) => {
    let total = 0;
    const WEIRD_PRIME = 31;
    for (let i=0; i< Math.min(key.length, 100); i++) {
        const char = key[i];
        const value = char.charCodeAt(0) - 96;
        total = (total + WEIRD_PRIME + value) % arrayLen;
    }
    return total;
}

console.log(hash(key, arrayLen));