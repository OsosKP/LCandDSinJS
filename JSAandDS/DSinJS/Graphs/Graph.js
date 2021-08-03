class Graph {
    constructor() {
        this.adjacenyList = {};
    }

    addVertex(vertex) {
        if (!(vertex in this.adjacenyList)) this.adjacenyList[vertex] = [];
    }

    removeVertex(vertex) {
        if (vertex in this.adjacenyList) {
            const endVertexList = this.adjacenyList[vertex];
            delete this.adjacenyList[vertex];
            if (endVertexList) endVertexList.forEach(endVertex => this.removeEdge(vertex, endVertex));
        }
    }

    addEdge(vertex1, vertex2) {
        if (vertex1 in this.adjacenyList) {
            this.adjacenyList[vertex1].push(vertex2);
        }
        if (vertex2 in this.adjacenyList) {
            this.adjacenyList[vertex2].push(vertex1);
        }
    }

    removeEdge(vertex1, vertex2) {
        if (vertex1 in this.adjacenyList) {
            this.adjacenyList[vertex1] =
                this.adjacenyList[vertex1].filter(vertex => vertex !== vertex2);
        }
        if (vertex2 in this.adjacenyList) {
            this.adjacenyList[vertex2] =
                this.adjacenyList[vertex2].filter(vertex => vertex !== vertex1);
        }
    }

    depthFirstRecursive(startNode) {
        const results = [];
        const visited = {};

        const search = (node) => {
            if (!(node in this.adjacenyList) || !this.adjacenyList[node].length) return;
            results.push(node);
            visited[node] = true;
            this.adjacenyList[node].forEach(adjacentNode => {
                if (!visited[adjacentNode]) search(adjacentNode);
            })
        }

        search(startNode)
        return results;
    }

    depthFirstIterative(start) {
        const result = [];
        const visited = {};
        const stack = [start];

        while (stack.length) {
            const vertex = stack.pop();
            result.push(vertex);
            visited[vertex] = true;
            this.adjacenyList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    stack.push(neighbor);
                }
            })
        }
        return result;
    }

    breadthFirstIterative(start) {
        const result = [];
        const visited = {};
        const stack = [start];

        while (stack.length) {
            const vertex = stack.shift();
            result.push(vertex);
            visited[vertex] = true;
            this.adjacenyList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    stack.push(neighbor);
                }
            })
        }
        return result;
    }
}

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F

const graph = new Graph();
graph.addVertex("Tokyo");
graph.addVertex("Aspen");
graph.addVertex("London");
graph.addVertex("Dublin");
graph.addVertex("New York");
graph.addEdge("Tokyo", "Aspen");
graph.addEdge("Tokyo", "London");
graph.addEdge("Aspen", "New York");
graph.addEdge("Dublin", "London");
graph.addEdge("Dublin", "Aspen");
graph.addEdge("Dublin", "New York");

const graph2 = new Graph();
graph2.addVertex("A");
graph2.addVertex("B");
graph2.addVertex("C");
graph2.addVertex("D");
graph2.addVertex("E");
graph2.addVertex("F");
graph2.addEdge("A", "B");
graph2.addEdge("A", "C");
graph2.addEdge("B", "D");
graph2.addEdge("C", "E");
graph2.addEdge("D", "E");
graph2.addEdge("D", "F");
graph2.addEdge("E", "F");

const resultsDfsRecursive = graph2.depthFirstRecursive("A");
const resultsDfsIterative = graph2.depthFirstIterative("A");
const resultsBfsIterative = graph2.breadthFirstIterative("A");
console.log(resultsDfsRecursive);
console.log(resultsDfsIterative);
console.log(resultsBfsIterative);
