class Node {
    constructor(value=null, isWord=false) {
        this.value = value;
        this.children = {};
        this.isWord = isWord;
    }
}

class Trie {
    constructor() {
        this.root = new Node("\0"); // Empty root
    }

    search(word) {
        const node = this.getNode(word);
        return node !== null && node.isWord;
    }

    startsWith(prefix) {
        return this.getNode(prefix) !== null;
    }

    insert(word) {
        let curr = this.root;
        for (const char of word) {
            if (!(char in curr.children)) curr.children[char] = new Node(char);
            curr = curr.children[char];
        }
        curr.isWord = true;
    }

    getNode(word) {
        let curr = this.root;
        for (const char of word) {
            if (!(char in curr.children)) return null;
            curr = curr.children[char];
        }
        return curr;
    }
}

const trie = new Trie();
trie.insert('cat');
trie.insert('cobra');
trie.insert('category');
trie.insert('cots');
console.log(trie.getNode('cat'));
console.log(trie.startsWith('cob'));
console.log(trie.search('cob'));