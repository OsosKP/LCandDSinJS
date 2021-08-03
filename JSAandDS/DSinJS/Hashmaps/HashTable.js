class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size);
    }

    _hash(key) {
        let total = 0;
        const WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            const char = key[i];
            const value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }

    set(key, value) {
        const hashedKey = this._hash(key);
        if (!this.keyMap[hashedKey]) this.keyMap[hashedKey] = [];
        this.keyMap[hashedKey].push([key, value])
    }

    get(key) {
        const hashedKey = this._hash(key);
        const valuesArray = this.keyMap[hashedKey];
        let result = null;
        if (valuesArray) {
            const entry = valuesArray.find(el => el[0] === key);
            if (entry) result = entry[1];
        }
        return result;
    }
}

const table = new HashTable();

table.set('pink', 'the color is pink');
table.set('blue', 'the color is blue');
table.set('red', 'the color is red');
table.set('black', 'the color is black');
table.set('cyan', 'the color is cyan');
table.set('magenta', 'the color is magenta');
table.set('yellow', 'the color is yellow');
table.set('green', 'the color is green');
table.set('teal', 'the color is teal');
table.set('orange', 'the color is orange');
table.set('grey', 'the color is grey');

console.log(table.keyMap);
console.log(table.get('cyan'));
console.log(table.get('grey'));