const { solve, shortestPath, breadthFirstSearch } = require("./WordLadder")

describe('outputs word ladder', () => {
    it('with Dijkstra', () => {
        expect(solve("FOOL", "SAGE", shortestPath))
            .toEqual("Shortest path: FOOL -> POOL -> POLL -> PALL -> PALE -> PAGE -> SAGE at cost 6")
    })

    it('with Breadth First Search', () => {
        expect(solve("FOOL", "SAGE", breadthFirstSearch))
            .toEqual("FOOL -> POOL -> POLL -> PALL -> PALE -> PAGE -> SAGE")
    })
})

