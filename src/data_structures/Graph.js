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

    this.toString = () => {
        // return this.depthSearch(this.nodes[0]).join(" ")
        return this.breadthSearch(this.nodes[0]).join(" ")
    }

    //Depth First Search
    this.depthSearch = (node) => {
        let list = []
        if (!node.visited) {
            list.push(visitNode(node))

            if (node.children.length) {
                for (let i=0;i<node.children.length;i++) {
                    list = list.concat(this.depthSearch(node.children[i]))
                }
            }
        }
        return list
    }

    //Breadth First Search
    this.breadthSearch = (node) => {
        let queue = new Queue()
        let list = []
        queue.push(node)

        while(queue.peek()) {
            let current = queue.remove()
            list.push(current.data)
            visitNode(current)

            current.children.forEach(child => {
                if (!child.visited) {
                    visitNode(child)
                    queue.push(child)
                }
            })
        }

        return list
    }
}

// let graph = new Graph()
// graph.nodes = (new Array(6)).fill(0).map((el, i) => new Node(i))
// graph.nodes[0].children = [
//     graph.nodes[1],
//     graph.nodes[4],
//     graph.nodes[5]
// ]
// graph.nodes[1].children = [
//     graph.nodes[3],
//     graph.nodes[4]
// ]
// graph.nodes[2].children = [
//     graph.nodes[1]
// ]
// graph.nodes[3].children = [
//     graph.nodes[2],
//     graph.nodes[4]
// ]

// console.log(graph.toString())

module.exports = { Graph, Node }