const {Graph, Node} = require('../data_structures/Graph')
const PriorityQueue = require('../data_structures/MinHeap')

//init dummy data
let graph = new Graph()
graph.nodes = (new Array(6)).fill(0).map((_, i) => new Node(i))
graph.nodes[0].children = [
    graph.nodes[1],
    graph.nodes[4],
    graph.nodes[5]
]
graph.nodes[1].children = [
    graph.nodes[3],
    graph.nodes[4]
]
graph.nodes[2].children = [
    graph.nodes[1]
]
graph.nodes[3].children = [
    graph.nodes[2],
    graph.nodes[4]
]

const links = [{
    source: 0,
    dest: 1,
    weight: 1
}, {
    source: 0,
    dest: 4,
    weight: 7
}, {
    source: 0,
    dest: 5,
    weight: 1
}, {
    source: 1,
    dest: 3,
    weight: 1
}, {
    source: 1,
    dest: 4,
    weight: 5
}, {
    source: 2,
    dest: 1,
    weight: 3
}, {
    source: 3,
    dest: 2,
    weight: 2
}, {
    source: 3,
    dest: 4,
    weight: 2
}]

let start = graph.nodes[0], end = graph.nodes[4]

//Solve
let queue = new PriorityQueue()

const shortestPath = (graph, links, start, end) => {
    
}

const traverseGraph = (root) => {
    if(!node.visited) {
        if(root.children.length) {
            root.children.forEach(child => {
                traverseGraph(child)
            })
        }
    }

    if (node !== start) { //calculate weights
        if (queue.nodes.indexOf())
    }

    node.visited = true
}

console.log(shortestPath(graph, links, start, end))