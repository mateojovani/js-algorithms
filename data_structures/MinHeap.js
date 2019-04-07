function MinHeap (valueFunc) {
    this.nodes = []
    this.getValue = node => node
    if (valueFunc) this.getValue = valueFunc

    let swap = (pos1, pos2) => {
        let node1 = JSON.parse(JSON.stringify(this.nodes[pos1]))
        let node2 = JSON.parse(JSON.stringify(this.nodes[pos2]))

        this.nodes[pos1] = node2
        this.nodes[pos2] = node1
    }

    let bubbleUp = n => {
        let node = this.nodes[n]
        let parentPos = this.getParentPos(n)

        if (parentPos > -1) {
            let parent = this.nodes[parentPos]

            if (this.getValue(node) < this.getValue(parent)) {
                swap(n, parentPos)
                bubbleUp(parentPos)
            }
        }
    }

    let bubbleDown = n => {
        let parent = this.nodes[n]
        let firstChildPos = this.getFirstChildPos(n)
        let secondChildPos = this.getSecondChildPos(n)
        let swapPos = null

        if (firstChildPos < this.nodes.length) {
            let child = this.nodes[firstChildPos]

            if (this.getValue(child) < this.getValue(parent)) {
                swapPos = firstChildPos
            }
        }

        if (secondChildPos < this.nodes.length) {
            let child = this.nodes[secondChildPos]

            if (!swapPos) {
                if (this.getValue(child) < this.getValue(parent))
                swapPos = secondChildPos
            } else {
                if (this.getValue(child) < this.getValue(this.nodes[firstChildPos]))
                swapPos = secondChildPos
            }
        }

        if (swapPos) {
            swap(swapPos, n)
            bubbleDown(swapPos)
        }
    }

    this.getParentPos = childPos => Math.floor(0.5 * (childPos - 1))

    this.getSecondChildPos = parentPos => (parentPos + 1) * 2

    this.getFirstChildPos = parentPos => this.getSecondChildPos(parentPos) - 1

    this.popMin = () => {
        let min = this.nodes[0]
        this.nodes[0] = this.nodes.pop()
        bubbleDown(0)

        return min
    }

    this.add = node => {
        this.nodes.push(node)
        bubbleUp(this.nodes.length-1)
    }
}

// let minHeap = new MinHeap(node => node.value)
// minHeap.add({name: "node 0", value: 7})
// minHeap.add({name: "node 1", value: 31})
// minHeap.add({name: "node 2", value: 2})
// minHeap.add({name: "node 3", value: 4})
// minHeap.add({name: "node 4", value: 3})
// minHeap.add({name: "node 5", value: 10})
// minHeap.add({name: "node 6", value: 0})
// minHeap.popMin()
// minHeap.popMin()
// minHeap.popMin()

module.exports = MinHeap