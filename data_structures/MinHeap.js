function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8)
        return v.toString(16)
    })
}

function MinHeap(valueFunc) {
    this.nodes = []
    this.getValue = node => node
    if (valueFunc) this.getValue = valueFunc

    let swap = (pos1, pos2) => {
        if (pos1 < pos2) {
            let posTemp = pos2
            pos2 = pos1
            pos1 = posTemp
        }
        //copy
        this.nodes.splice(pos1 + 1, 0, this.nodes[pos2])
        this.nodes.splice(pos2 + 1, 0, this.nodes[pos1])
        //remove
        this.nodes.splice(pos1 + 1, 1)
        this.nodes.splice(pos2, 1)
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
        if (this.nodes.length === 1)
            this.nodes.pop()
        else this.nodes[0] = this.nodes.pop()
        bubbleDown(0)

        return min
    }

    this.add = node => {
        node._id = uuidv4() //assign unique id
        this.nodes.push(node)
        bubbleUp(this.nodes.length - 1)

        return node
    }

    this.remove = node => {
        for (let i = 0; i < this.nodes.length; i++) {
            if (this.nodes[i]._id !== node._id)
                continue

            let end = this.nodes.pop()
            if (i == this.nodes.length - 1)
                break

            this.nodes[i] = end
            bubbleUp(i)
            bubbleDown(i)
            break
        }
    }

    this.update = (node, ufunc) => {
        let index = 0
        for (index; index < this.nodes.length; index++)
            if (this.nodes[index]._id === node._id) break

        ufunc(this.nodes[index])
        swap(index, this.nodes.length - 1)
        bubbleUp(this.nodes.length - 1)
        bubbleDown(index)
    }

    this.isEmpty = () => this.nodes.length === 0
}

// let minHeap = new MinHeap(node => node.value)
// let node0 = minHeap.add({name: "node 0", value: 7})
// let node1 = minHeap.add({name: "node 1", value: 31})
// let node2 = minHeap.add({name: "node 2", value: 2})
// let node3 = minHeap.add({name: "node 3", value: 4})
// let node4 = minHeap.add({name: "node 4", value: 3})
// let node5 = minHeap.add({name: "node 5", value: 10})
// let node6 = minHeap.add({name: "node 6", value: 0})
// minHeap.popMin()
// minHeap.popMin()
// minHeap.popMin()
// minHeap.remove(node5)
// minHeap.remove(node6)
// minHeap.update(node1, node => node.value = 0)

module.exports = MinHeap