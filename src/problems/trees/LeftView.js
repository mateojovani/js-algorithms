/** ---------------------------------------------------------------------------------------
 * PROBLEM
 * ----------------------------------------------------------------------------------------
 * Given a Binary Tree, print left view of it.
 * Left view of a Binary Tree is set of nodes visible when tree is visited from left side.
 * Input:
 *               1
 *              / \
 *             2   3
 *            / \   \
 *           4   5   6
 *
 * Output: 1 2 4
 */

const leftView = (rootNode) => {
    const levels = {}

    const visitNode = (node, level) => {
        if (!levels[level]) {
            levels[level] = node.data
        }

        if (node.left) {
            visitNode(node.left, level + 1)
        }

        if (node.right) {
            visitNode(node.right, level + 1)
        }
    }

    visitNode(rootNode, 0)

    let output = ' '
    for (let i in levels) {
        output += levels[i] + ' '
    }

    return output.trim()
}

module.exports = { leftView }
