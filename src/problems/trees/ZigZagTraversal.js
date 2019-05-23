/** ---------------------------------------------------------------------------------------
 * PROBLEM
 * ----------------------------------------------------------------------------------------
 * Write a function to print ZigZag order traversal of a binary tree.
 *
 * Input:
 *               1
 *              / \
 *             2   3
 *            / \   \
 *           4   5   6
 *
 * Output: 1 3 2 4 5 6
 */

const zigZag = (rootNode) => {
    const levels = {}

    const visitNode = (node, level) => {
        if (levels[level]) {
            levels[level].push(node.data)
        } else {
            levels[level] = [node.data]
        }

        if (node.left) {
            visitNode(node.left, level + 1)
        }

        if (node.right) {
            visitNode(node.right, level + 1)
        }
    }

    visitNode(rootNode, 0)

    let output = ''
    Object.keys(levels).forEach(level => {
        output += levels[level].reduce((str, curr) => {
            if (level % 2 === 0) {
                return str + curr + ' '
            } else {
                return curr + ' ' + str
            }
        }, '')
    })

    return output.trim()
}

module.exports = { zigZag }
