class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        if (!this.root) this.root = new Node(val);
        else this.root.insert(val);
    }


    dfs() {
        const list = [this.root];
        const out = [];
        const search = (nodes, out) => {
            if (!nodes.length) return;
            const node = nodes.shift();
            out.push(node.val);
            if (node.right) nodes.unshift(node.right);
            if (node.left) nodes.unshift(node.left);
            search(nodes, out);
        }
        search(list, out);
        return out;
    }
}

class Node {
    constructor(val, left=null, right=null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }

    insert(val) {
        if (val <= this.val) {
            if (!this.left) {
                this.left = new Node(val);
            }
            else {
                this.left.insert(val);
            }
        }
        else {
            if (!this.right) {
                this.right = new Node(val);
            } else {
                this.right.insert(val);
            }
        }
    }
}

const tree = new BinaryTree();
tree.insert(50);
tree.insert(25);
tree.insert(30);
tree.insert(10);
tree.insert(75);
tree.insert(60);
tree.insert(100);
// console.log(tree.root);

console.log(tree.dfs());
