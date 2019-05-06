// Binary search Tree

function Node(data) {
    this.data = data
    this.left = null
    this.right = null
}

function BST() {
    this.root = null

    const visitNode = (node) => {
        return node.data
    }

    const inOrderTraversal = (node) => {
        let list = []
        if (node !== null) {
            list = list.concat(inOrderTraversal(node.left))
            list.push(visitNode(node))
            list = list.concat(inOrderTraversal(node.right))
        }

        return list
    }

    const addTo = (node, data, to) => {
        if (node)
            if (data <= node.data)
                addTo(node.left, data, ["left", node])
            else
                addTo(node.right, data, ["right", node])
        else {
            to[1][to[0]] = new Node(data)
        }
    }

    this.toString = () => {
        return inOrderTraversal(this.root).join(" ")
    }

    this.add = (data) => {
        if (!this.root)
            return this.root = new Node(data)

        addTo(this.root, data)
    }
}

module.exports = BST