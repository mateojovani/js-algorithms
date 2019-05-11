//find a Vertical Sum of a Binary Tree
const Tree = require('../../data_structures/Tree')

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

module.exports = { Tree, traverse, verticalSum }
