const PriorityQueue = require('../data_structures/MinHeap')

//Fill Queue
const init = (graph, start) => {
    let pq = new PriorityQueue(n => n.value)
    let graphNodes = {}
    // store each graph node in a Priority queue
    graph.nodes.forEach(({node}) => {
        graphNodes[node.data] = pq.add({
            node: node,
            value: node.data === start.node.data ? 0 : Infinity
        })
    })

    return {
        pq: pq,
        graphNodes: graphNodes
    }
}

const printPath = (path, start, end) => {
    let pathStr = 'No path found'
    for (let i = path.length - 1; i >= 0; i--) {
        if (path[i].dest.data === end.node.data) { //found end
            let dest = end.node.data
            let source = path[i].source.data
            pathStr = ` -> ${dest} at cost ${path[i].cost}`
            while (i > 0) {
                i--
                if (path[i].dest.data !== source) continue
                dest = path[i].dest.data
                source = path[i].source.data
                pathStr = ` -> ${dest}` + pathStr
            }

            pathStr = 'Shortest path: ' + start.node.data + pathStr
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
            let oldWeight = graphNodes[node.data].value
            let newWeight = graphNodes[vertex.node.data].value + weight

            if (newWeight < oldWeight) {
                path.push({ source: vertex.node, dest: node, cost: newWeight })
                pq.update(graphNodes[node.data], n => n.value = newWeight)
            }
        })
    }

    return printPath(path, start, end)
}

module.exports = { shortestPath }
