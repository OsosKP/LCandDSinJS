class Node {
    constructor(value) {
        this.val = value;
        this.left = null;
        this.right = null;
    }

    insert(value) {
        if (value <= this.val) {
            if (!this.left) this.left = new Node(value);
            else this.left.insert(value);
        } else {
            if (!this.right) this.right = new Node(value);
            else this.right.insert(value);
        }
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        if (!this.root) this.root = new Node(value);
        else this.root.insert(value);
    }
}

const getPermutations = (string) => {
    for (const char of string) {
        
    }
}