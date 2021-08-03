class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insert(value) {
        if (value < this.value) {
            if (!this.left) {
                this.left = new Node(value);
            } else {
                this.left.insert(value);
            }
        } else {
            if (!this.right) {
                this.right = new Node(value);
            } else {
                this.right.insert(value);
            }
        }
    }
}

const bfs = (queue = [], result = []) => {
    if (!queue.length) return result;
    const node = queue.shift();
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
    result.push(node.value);
    return bfs(queue, result);
}

// const dfsPreOrder = (queue = [], result = []) => {
//     if (!queue.length) return result;
//     const node = queue.pop();
//     if (node.right) queue.push(node.right);
//     if (node.left) queue.push(node.left);
//     result.push(node.value);
//     return dfsInOrder(queue, result);
// }

const dfsPreOrder = (root) => {
    if (!root) return;
    const result = [];
    const traverse = (node) => {
        if (!node) return;
        result.push(node.value);
        traverse(node.left);
        traverse(node.right);
    }
    traverse(root);
    return result;
}

const dfsInOrder = (root) => {
    if (!root) return;
    const result = [];
    const traverse = (node) => {
        if (!node) return;
        traverse(node.left);
        result.push(node.value)
        traverse(node.right);
    }
    traverse(root);
    return result;
}

const dfsPostOrder = (root) => {
    const result = [];
    const traverse = (node) => {
        if (!node) return;
        traverse(node.left);
        traverse(node.right);
        result.push(node.value);
    }
    traverse(root);
    return result;
}

const tree = new Node(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);
tree.insert(12);
tree.insert(17);

const result = bfs([tree]);
console.log(result);

const preResult = dfsPreOrder(tree);
console.log(preResult);

const inResult = dfsInOrder(tree);
console.log(inResult);

const postResult = dfsPostOrder(tree);
console.log(postResult);