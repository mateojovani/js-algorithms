const Graph = require('./Graph')


describe('construct a graph', () => {
    let graph = null

    beforeEach(() => {
        graph = new Graph()
        Array(6).fill(0).map((_, i) => graph.addNode(i))
        graph.addEdge(graph.nodes[0], graph.nodes[1])
        graph.addEdge(graph.nodes[0], graph.nodes[4])
        graph.addEdge(graph.nodes[0], graph.nodes[5])

        graph.addEdge(graph.nodes[1], graph.nodes[3])
        graph.addEdge(graph.nodes[1], graph.nodes[4])

        graph.addEdge(graph.nodes[2], graph.nodes[1])

        graph.addEdge(graph.nodes[3], graph.nodes[2])
        graph.addEdge(graph.nodes[3], graph.nodes[4], 8)
    })

    it('nodes and edges check', () => {
        expect(graph.nodes).toHaveLength(6)
        expect(graph.nodes[0]).toHaveProperty('node')
        expect(graph.nodes[0]).toHaveProperty('weight')
        expect(graph.nodes[0].node.children).toHaveLength(3)
        expect(graph.nodes[0].node.children[0].weight).toEqual(0)
    })

    it('weighted edge check', () => {
        expect(graph.nodes[3].node.children[1].weight).toEqual(8)
    })

    it('depth search', () => {
        expect(graph.depthSearch(graph.nodes[0])).toEqual([0, 1, 3, 2, 4, 5])
    })

    it('breadth search', () => {
        expect(graph.breadthSearch(graph.nodes[0])).toEqual([0, 1, 4, 5, 3, 2])
    })
})
