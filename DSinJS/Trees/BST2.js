class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insert(val) {
        if (val === this.value) return;
        if (val < this.value) {
            if (!this.left) this.left = new Node(val);
            else this.left.insert(val);
        } else {
            if (!this.right) this.right = new Node(val);
            else this.right.insert(val);
        }
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    findMinDepth() {
        const search = (node) => {
            if (!node) return 0;
            if (!node.left && !node.right) return 1;
            else if (!node.left) return 1 + search(node.right);
            else if (!node.right) return 1 + search(node.left);
            else return 1 + Math.min(search(node.left), search(node.right));
        }
        return search(this.root);
    }

    // findMinDepthIterative() {
    //     if (!this.root) return 0;
    //     const stack = [[this.root, 1]];

    //     while (stack.length) {
    //         const node = stack.shift();
    //         if (!node[0].left && !node[0].right) return node[1];
    //         if (node[0].left) stack.push([node[0].left, node[1] + 1]);
    //         if (node[0].right) stack.push([node[0].right, node[1] + 1]);
    //     }
    // }

    findMaxDepth() {
        if (!this.root) return 0;
        
        const search = (node) => {
            if (!node) return 0;
            if (!node.left && !node.right) return 1;
            return 1 + Math.max(search(node.left), search(node.right));
        }
        return search(this.root);
    }

    // findMaxDepthIterative() {
    //     if (!this.root) return 0;
    //     let MAX_DEPTH = 1;
    //     const stack = [{ node: this.root, depth: 1 }];

    //     const search = (stack) => {
    //         while (stack.length) {
    //             const data = stack.shift();
    //             const node = data['node'];
    //             const depth = data['depth'];
    //             MAX_DEPTH = Math.max(depth, MAX_DEPTH);
    //             if (node.right) stack.unshift({ node: node.right, depth: depth + 1 });
    //             if (node.left) stack.unshift({ node: node.left, depth: depth + 1 });
    //         }
    //         return MAX_DEPTH;
    //     }

    //     return search(stack);
    // }

    insert(val) {
        const node = new Node(val);
        if (!this.root) this.root = node;
        else this.root.insert(val);
    }

    levelOrderTraversal() {
        if (!this.root) return [];
        const stack = [{ node: this.root, depth: 1 }];
        const result = [];

        while (stack.length) {
            const data = stack.pop();
            const node = data['node'];
            if (!node) return;
            const depth = data['depth'];

            const group = depth - 1;
            if (!result[group]) result[group] = [];
            result[group].push(node.value)

            if (node.right) stack.push({ node: node.right, depth: depth + 1 });
            if (node.left) stack.push({ node: node.left, depth: depth + 1 });
        }

        return result;
    }

    bfs() {
        if (!this.root) return null;
        const queue = [this.root];
        const result = [];

        const search = (queue) => {
            if (!queue.length) return;
            const node = queue.shift();
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
            result.push(node.value);
            search(queue);
        }

        search(queue);
        return result;
    }

    dfs() {
        if (!this.root) return null;
        const stack = [this.root];
        const result = [];

        const search = (stack) => {
            if (!stack.length) return;
            const node = stack.shift();
            result.push(node.value);
            if (node.right) stack.unshift(node.right);
            if (node.left) stack.unshift(node.left);
            search(queue);
        }

        search(stack);
        return result;
    }

    dfsPost() {
        const result = [];

        const traverse = (node) => {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            result.push(node.value);
        }

        traverse(this.root);
        return result;
    }
}

const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
bst.insert(12);
bst.insert(18);
bst.insert(1);
bst.insert(4);
bst.insert(6)
bst.insert(8)
bst.insert(11)
bst.insert(14)
bst.insert(17)
bst.insert(20)

// bst.insert(2)
// bst.insert(3)
// bst.insert(4)
// bst.insert(5)
// bst.insert(6)

console.log(bst.bfs());
// console.log(bst.dfs());
// console.log(bst.dfsPost());
// console.log(bst.levelOrderTraversal());
// console.log(bst.findMinDepth());
// console.log(bst.findMaxDepth());

const bst2 = new BinarySearchTree();
const serialized = bst.bfs().join(",");
console.log(serialized);
for (const node of serialized.split(",")) {
    bst2.insert(Number(node));
}
console.log(bst2.bfs());