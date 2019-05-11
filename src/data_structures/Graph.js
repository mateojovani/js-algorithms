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

    this.toString = (strategy = 'depth') => {
        if (strategy === 'depth')
            return this.depthSearch(this.nodes[0]).join(' ')
        return this.breadthSearch(this.nodes[0]).join(' ')
    }

    this.addNode = (data) => {
        let node = new Node(data)
        this.nodes.push({ node, weight: 0 })

        return node
    }

    this.addEdge = (n1, n2, weight = 0) => {
        n1.node.children.push({ node: n2.node, weight })
    }

    //Depth First Search
    this.depthSearch = ({ node }) => {
        let list = []
        if (!node.visited) {
            list.push(visitNode(node))

            if (node.children.length) {
                for (let i = 0; i < node.children.length; i++) {
                    list = list.concat(this.depthSearch(node.children[i]))
                }
            }
        }
        return list
    }

    //Breadth First Search
    this.breadthSearch = ({ node }) => {
        let queue = new Queue()
        let list = []
        queue.push(node)

        while (queue.peek()) {
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

module.exports = Graph
