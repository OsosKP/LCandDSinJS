class Node {
    constructor(value) {
        this.val = value;
        this.left = null;
        this.right = null;
    }

    insert(value) {
        if (value <= this.val) {
            if (this.left) {
                this.left.insert(value);
            } else {
                this.left = new Node(value);
            }
        } else {
            if (this.right) {
                this.right.insert(value);
            } else {
                this.right = new Node(value);
            }
        }
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        if (!this.root) this.root = new Node(value);
        else this.root.insert(value);
    }

    inOrderTraversal() {
        if (!this.root) return [];
        const result = [];

        const traverse = (node) => {
            if (!node) return;
            if (node.left) traverse(node.left);
            result.push(node.val);
            if (node.right) traverse(node.right);
        }

        traverse(this.root);
        return result;
    }

    preOrderTraversal() {
        if (!this.root) return [];
        const result = [];

        const traverse = (node) => {
            if (!node) return;
            result.push(node.val);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }

        traverse(this.root);
        return result;
    }

    postOrderTraversal() {
        if (!this.root) return [];
        const result = [];

        const traverse = (node) => {
            if (!node) return;
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            result.push(node.val);
        }

        traverse(this.root);
        return result;
    }

    bfs() {
        if (!this.root) return [];
        const stack = [this.root];
        const result = [];

        const search = (stack) => {
            if (!stack.length) return;
            const node = stack.pop();
            result.push(node.val);
            if (node.left) stack.unshift(node.left);
            if (node.right) stack.unshift(node.right);
            search(stack);
        }

        search(stack);
        return result;
    }
}

const bt = new BinaryTree();
bt.insert(10);
bt.insert(5);
bt.insert(15);
bt.insert(4);
bt.insert(6);
bt.insert(14);
bt.insert(16);

console.log(bt.preOrderTraversal());
console.log(bt.inOrderTraversal());
console.log(bt.postOrderTraversal());