const Queue = require('./Queue')

function Node(data) {
    this.data = data
    this.children = []
}

function Graph() {
    this.nodes = []

    const visitNode = (node) => {
        node.visited = true
        return node.data
    }

    this.toString = (strategy = "depth") => {
        if (strategy === "depth")
            return this.depthSearch(this.nodes[0]).join(" ")
        return this.breadthSearch(this.nodes[0]).join(" ")
    }

    this.addNode = (data) => {
        let node = new Node(data)
        this.nodes.push({ node, weight: 0})

        return node
    }

    this.addEdge = (n1, n2, weight = 0) => {
        n1.node.children.push({node: n2.node, weight})
    }

    //Depth First Search
    this.depthSearch = ({node, weight}) => {
        let list = []
        if (!node.visited) {
            list.push(visitNode(node))

            if (node.children.length) {
                for (let i=0; i<node.children.length; i++) {
                    list = list.concat(this.depthSearch(node.children[i]))
                }
            }
        }
        return list
    }

    //Breadth First Search
    this.breadthSearch = ({node, weight}) => {
        let queue = new Queue()
        let list = []
        queue.push(node)

        while(queue.peek()) {
            let current = queue.remove()
            list.push(current.data)
            visitNode(current)

            current.children.forEach(child => {
                if (!child.node.visited) {
                    visitNode(child.node)
                    queue.push(child.node)
                }
            })
        }

        return list
    }
}

// let graph = new Graph()
// Array(6).fill(0).map((el, i) => graph.addNode(i))
// graph.addEdge(graph.nodes[0], graph.nodes[1])
// graph.addEdge(graph.nodes[0], graph.nodes[4])
// graph.addEdge(graph.nodes[0], graph.nodes[5])

// graph.addEdge(graph.nodes[1], graph.nodes[3])
// graph.addEdge(graph.nodes[1], graph.nodes[4])

// graph.addEdge(graph.nodes[2], graph.nodes[1])

// graph.addEdge(graph.nodes[3], graph.nodes[2])
// graph.addEdge(graph.nodes[3], graph.nodes[4])

// console.log(graph.toString("breadth"))

module.exports = Graph