const { Graph, Node } = require('../data_structures/Graph')
const PriorityQueue = require('../data_structures/MinHeap')

//init dummy data
let graph = new Graph()
graph.nodes = (new Array(6)).fill(0).map((_, i) => new Node({ name: `Node${i}`, value: i }))
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
    source: "Node" + 0,
    dest: "Node" + 1,
    weight: 1
}, {
    source: "Node" + 0,
    dest: "Node" + 4,
    weight: 7
}, {
    source: "Node" + 0,
    dest: "Node" + 5,
    weight: 1
}, {
    source: "Node" + 1,
    dest: "Node" + 3,
    weight: 1
}, {
    source: "Node" + 1,
    dest: "Node" + 4,
    weight: 5
}, {
    source: "Node" + 2,
    dest: "Node" + 1,
    weight: 3
}, {
    source: "Node" + 3,
    dest: "Node" + 2,
    weight: 2
}, {
    source: "Node" + 3,
    dest: "Node" + 4,
    weight: 2
}]

let start = graph.nodes[0], end = graph.nodes[4]

//Solve

//Fill Queue
const init = (graph, start) => {
    let pq = new PriorityQueue(n => n.value)
    let graphNodes = {} //map
    graph.nodes.forEach(node => {
        graphNodes[node.data.name] = pq.add({
            node: node,
            value: node.data.name === start.data.name ? 0 : Infinity
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
        if (path[i].dest.data.name === end.data.name) { //found end
            let dest = end.data.name
            let source = path[i].source.data.name
            pathStr = ` -> ${dest} at cost ${path[i].cost}`
            while (i > 0) {
                i--
                if (path[i].dest.data.name !== source) continue
                dest = path[i].dest.data.name
                source = path[i].source.data.name
                pathStr = ` -> ${dest}` + pathStr
            }

            pathStr = "Shortest path: " + start.data.name + pathStr
        }
    }

    return pathStr
}

const shortestPath = (graph, links, start, end) => {
    let { pq, graphNodes } = init(graph, start)
    let path = []

    while (!pq.isEmpty()) {
        let vertex = pq.popMin()
        let edges = vertex.node.children

        edges.forEach(edge => {
            let weight = links.find(l => l.source === vertex.node.data.name && l.dest === edge.data.name).weight
            let oldWeight = graphNodes[edge.data.name].value
            let newWeight = graphNodes[vertex.node.data.name].value + weight

            if (newWeight < oldWeight) {
                path.push({ source: vertex.node, dest: edge, cost: newWeight })
                pq.update(graphNodes[edge.data.name], node => node.value = newWeight)
            }
        })
    }

    return printPath(path, start, end)
}

console.log(shortestPath(graph, links, start, end))