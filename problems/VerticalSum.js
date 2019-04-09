//find a Vertical Sum of a Binary Tree
const Tree = require("../data_structures/Tree")

let bst = new Tree()
bst.add(7)
bst.add(8)
bst.add(2)
bst.add(1)
bst.add(0)
bst.add(9)
bst.add(34)
bst.add(3)

console.log(bst.toString())

//root has a Horizontal Distance HD: 0
//right nodes +1
//left nodes -1
let verticalSum = {}
//traverse tree
const traverse = (node, hd = 0) => {
    if (!node) return

    if(verticalSum[hd])
        verticalSum[hd] += node.data
    else verticalSum[hd] = node.data

    traverse(node.left, hd - 1)
    traverse(node.right, hd + 1)
}
traverse(bst.root)

console.log(verticalSum)