const MinHeap = require('./MinHeap')


describe('construct a minHeap', () => {
    let minHeap, node1, node5, node6

    beforeEach(() => {
        minHeap = new MinHeap(node => node.value)
        minHeap.add({ name: 'node 0', value: 7 })
        node1 = minHeap.add({ name: 'node 1', value: 31 })
        minHeap.add({ name: 'node 2', value: 2 })
        minHeap.add({ name: 'node 3', value: 4 })
        minHeap.add({ name: 'node 4', value: 3 })
        node5 = minHeap.add({ name: 'node 5', value: 10 })
        node6 = minHeap.add({ name: 'node 6', value: 0 })
    })

    it('add check', () => {
        expect(minHeap.nodes[0].value).toEqual(0)
    })

    it('popMin check', () => {
        minHeap.popMin()
        minHeap.popMin()
        minHeap.popMin()
        minHeap.remove(node5)
        minHeap.remove(node6)

        expect(minHeap.nodes).toHaveLength(3)
        expect(minHeap.nodes[0].value).toEqual(4)
    })

    it('update check', () => {
        minHeap.update(node1, node => node.value = 0)
        expect(minHeap.nodes[0].value).toEqual(0)
    })
})
