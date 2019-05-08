const Graph            = require("../data_structures/Graph")
const { shortestPath } = require("../algorithms/Dijkstra")
const fs               = require('fs')
const path             = require("path")

const expect = require("chai").expect

/**
 * Transform the word “FOOL” into the word “SAGE”.
 * In a word ladder puzzle you must make the change occur gradually by changing one letter at a time.
 * At each step you must transform one word into another word,
 * you are not allowed to transform a word into a non-word
 *
 * FOOL
 * POOL
 * POLL
 * POLE
 * PALE
 * SALE
 * SAGE
 *
 */

/**
 * Read words from dictionary and organise into buckets, such as:
 * POPE -> _OPE, P_PE, PO_E, POP_
 * each bucket has words that change by one hop from the each-other
 */
const getBucketsFromWord = word => {
    word = word.split("")

    return word.map((_, i) => {
        return word.reduce((w, c, index) => {
            if (index === i) return w + "_"
            return w + c
        }, "")
    })
}

const generateBuckets = words => {
    let buckets = {}

    words.forEach(word => {
        word = word.toUpperCase()

        getBucketsFromWord(word).forEach(bucket => {
            if (buckets[bucket]) {
                buckets[bucket].push(word)
            } else {
                buckets[bucket] = [word]
            }
        })
    })

    return buckets
}

/**
 * Build a graph consisting in nodes that are apart one hop
 * from each other
 */

const buildGraph = (buckets, startWord, endWord) => {
    let graph = new Graph()
    let start = null
    let end = null

    /**
     * Proxy addNode method of graph
     * to check if node has already
     * been added
     */
    const addNode = (word) => {
        const vertex = graph.nodes.find(n => n.node.data === word)
        if (vertex) {
            return vertex
        }

        let node = { node: graph.addNode(word), weight: 0 }
        if (word === startWord) {
            start = node
        }
        if (word === endWord) {
            end = node
        }

        return node
    }

    Object.keys(buckets).forEach(bucketName => {
        let bucket = buckets[bucketName]

        bucket.forEach(word1 => {
            bucket.forEach(word2 => {
                if (word1 !== word2) {
                    graph.addEdge(
                        addNode(word1),
                        addNode(word2),
                        1 //weight is 1 hop
                    )
                }
            })
        })
    })

    return { graph, start, end }
}

/**
 * Solution
 */

const solve = (startWord, endWord) => {
    const words = fs
        .readFileSync(path.resolve(__dirname, "./resources/words.txt"))
        .toString()
        .split("\n")

        let { graph, start, end } = buildGraph(
            generateBuckets(words),
            startWord,
            endWord
        )

        return shortestPath(graph, start, end)
}


/**
 * Assert
 */

it('outputs word ladder', () => {
    expect(solve("FOOL", "SAGE")).to.equal("Shortest path: FOOL -> POOL -> POLL -> PALL -> PALE -> PAGE -> SAGE at cost 6")
})