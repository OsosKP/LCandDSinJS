class Node {
    constructor(value) {
        this.value = value;
        this.children = {};
        this.isWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new Node('\0');
    }

    traverse(word) {
        let curr = this.root;
        for (const char of word) {
            if (!(char in curr.children)) {
                curr.children[char] = new Node(char);
            }
            curr = curr.children[char];
        }
        curr.isWord = true;
        return curr;
    }

    

    next(word) {
        const last = this.traverse(word);
        const out = [];
        for (const key in last.children) {
            if (last.children[key].isWord) out.unshift(key);
            else out.push(key);
        }
        return out;
    }

    predict(word) {
        const last = this.traverse(word);
        const out = [];
        for (const key in last.children) {
            if (last.children[key].isWord) out.unshift(word + key);
            else out.push(word + key + "...");
        }
        return out;
    }
}

const trie = new Trie();
trie.traverse('cad');
trie.traverse('cage');
trie.traverse('calamari');
trie.traverse('came');
trie.traverse('cap');
trie.traverse('cat');
trie.traverse('catch');
trie.traverse('cats');

console.log(trie.next('ca'));
console.log(trie.predict('ca'));