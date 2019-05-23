/** ------------------------------------------------------------------------------------
 * PROBLEM
 * -------------------------------------------------------------------------------------
 * Given a n*n matrix where all numbers are distinct, find the maximum length path (starting from any cell),
 * such that all cells along the path are in increasing order with a difference of 1.
 * We can move in 4 directions from a given cell (i, j),
 * i.e., we can move to (i+1, j) or (i, j+1) or (i-1, j) or (i, j-1),
 * with the condition that the adjacent cells have a difference of 1.
 *
 * Input:  mat[][] = {{1, 2, 9}
 *                    {5, 3, 8}
 *                    {4, 6, 7}}
 * Output: 6 7 8 9
 * The longest path is 6-7-8-9
 */
const getPathsAtPos = ([x, y], matrix) => {
    let paths = []
    let valueAtPos = matrix[x][y]
    // check top
    if ((x - 1 >= 0) && (matrix[x - 1][y] - valueAtPos === 1))
        paths.push([[x, y], [x - 1, y]])
    // check left
    if ((y - 1 >= 0) && (matrix[x][y - 1] - valueAtPos === 1))
        paths.push([[x, y], [x, y - 1]])
    // check right
    if ((y + 1 < matrix[x].length) && (matrix[x][y + 1] - valueAtPos === 1))
        paths.push([[x, y], [x, y + 1]])
    // check bottom
    if ((x + 1 < matrix.length) && (matrix[x + 1][y] - valueAtPos === 1))
        paths.push([[x, y], [x + 1, y]])

    return paths
}

const joinContinuingPath = (current, next) => {
    if (current[0][0] === next[next.length - 1][0] &&
        current[0][1] === next[next.length - 1][1]) {
        current.shift()
        return next.concat(current)
    } else {
        next.shift()
        return current.concat(next)
    }
}

const isPath = ([[xi, yi], [xj, yj]], [[zi, wi], [zj, wj]]) => {
    if (xi === zj && yi === wj) return true
    if (xj === zi && yj === wi) return true
    return false
}

const joinPaths = (paths) => {
    let pointer = 0

    while (pointer < paths.length - 1) {
        let nextPointer = pointer + 1
        let currentPath = paths[pointer]
        while (nextPointer < paths.length) {
            let nextPath = paths[nextPointer]
            if (
                isPath(
                    [currentPath[0], currentPath[currentPath.length - 1]],
                    [nextPath[0], nextPath[nextPath.length - 1]]
                )
            ) {
                paths[pointer] = joinContinuingPath(currentPath, nextPath)
                currentPath = paths[pointer]
                paths.splice(nextPointer, 1)
                nextPointer = pointer + 1
            } else {
                nextPointer++
            }
        }
        pointer++
    }

    return paths
}

const getLongestPath = (paths, matrix) => {
    paths.sort((p1, p2) => p1.length - p2.length)
    const longestPath = paths[paths.length - 1]

    return longestPath.reduce((o, [x, y]) => o + matrix[x][y] + ' ', '').trim()
}

const longestPath = (matrix) => {
    let paths = []
    matrix.forEach((row, rowIndex) => {
        row.forEach((_, colIndex) => {
            paths = paths.concat(getPathsAtPos([rowIndex, colIndex], matrix))
        })
    })
    paths = joinPaths(paths)

    return getLongestPath(paths, matrix)
}

module.exports = longestPath
