const Graph = require('../data_structures/Graph')
const PriorityQueue = require('../data_structures/MinHeap')

//init dummy data
let graph = new Graph()
Array(6).fill(0).map((_, i) => graph.addNode({ name: `Node${i}`, value: i }))
graph.addEdge(graph.nodes[0], graph.nodes[1], 1)
graph.addEdge(graph.nodes[0], graph.nodes[4], 7)
graph.addEdge(graph.nodes[0], graph.nodes[5], 1)
graph.addEdge(graph.nodes[1], graph.nodes[3], 1)
graph.addEdge(graph.nodes[1], graph.nodes[4], 5)
graph.addEdge(graph.nodes[2], graph.nodes[1], 3)
graph.addEdge(graph.nodes[3], graph.nodes[2], 2)
graph.addEdge(graph.nodes[3], graph.nodes[4], 2)

let start = graph.nodes[0], end = graph.nodes[4]

//Solve

//Fill Queue
const init = (graph, start) => {
    let pq = new PriorityQueue(n => n.value)
    let graphNodes = {}
    // store each graph node in a Priority queue
    graph.nodes.forEach(({node}) => {
        graphNodes[node.data.name] = pq.add({
            node: node,
            value: node.data.name === start.node.data.name ? 0 : Infinity
        })
    })

    return {
        pq: pq,
        graphNodes: graphNodes
    }
}

const printPath = (path, start, end) => {
    let pathStr = "No path found"
    for (let i = path.length - 1; i >= 0; i--) {
        if (path[i].dest.data.name === end.node.data.name) { //found end
            let dest = end.node.data.name
            let source = path[i].source.data.name
            pathStr = ` -> ${dest} at cost ${path[i].cost}`
            while (i > 0) {
                i--
                if (path[i].dest.data.name !== source) continue
                dest = path[i].dest.data.name
                source = path[i].source.data.name
                pathStr = ` -> ${dest}` + pathStr
            }

            pathStr = "Shortest path: " + start.node.data.name + pathStr
        }
    }

    return pathStr
}

const shortestPath = (graph, start, end) => {
    let { pq, graphNodes } = init(graph, start)
    let path = []

    while (!pq.isEmpty()) {
        let vertex = pq.popMin()
        let edges = vertex.node.children

        edges.forEach(({node, weight}) => {
            let oldWeight = graphNodes[node.data.name].value
            let newWeight = graphNodes[vertex.node.data.name].value + weight

            if (newWeight < oldWeight) {
                path.push({ source: vertex.node, dest: node, cost: newWeight })
                pq.update(graphNodes[node.data.name], n => n.value = newWeight)
            }
        })
    }

    return printPath(path, start, end)
}

console.log(shortestPath(graph, start, end))