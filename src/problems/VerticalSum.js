const expect = require("chai").expect

//find a Vertical Sum of a Binary Tree
const Tree = require("../data_structures/Tree")

//root has a Horizontal Distance HD: 0
//right nodes +1
//left nodes -1
let verticalSum = {}
//traverse tree
const traverse = (node, hd = 0) => {
    if (!node) return

    if (verticalSum[hd])
        verticalSum[hd] += node.data
    else verticalSum[hd] = node.data

    traverse(node.left, hd - 1)
    traverse(node.right, hd + 1)
}


/**
 * Assert
 */
it('vertical sum', () => {
    let bst = new Tree()
    bst.add(7)
    bst.add(8)
    bst.add(2)
    bst.add(1)
    bst.add(0)
    bst.add(9)
    bst.add(34)
    bst.add(3)

    traverse(bst.root)

    expect(verticalSum).to.deep.equal({ '0': 10, '1': 8, '2': 9, '3': 34, '-1': 2, '-2': 1, '-3': 0 })
})