const longestPath = require('./MatrixLongestPath')

describe('matrix longest path', () => {
    it('basic', () => {
        const matrix = [
            [1, 2, 9],
            [5, 3, 8],
            [4, 6, 7]
        ]
        expect(longestPath(matrix)).toEqual('6 7 8 9')
    })

    it('edge case (1)', () => {
        const matrix = [
            [1],
            [2]
        ]
        expect(longestPath(matrix)).toEqual('1 2')
    })

    it('edge case (2)', () => {
        const matrix = [
            [1, 0]
        ]
        expect(longestPath(matrix)).toEqual('0 1')
    })

    it('edge case (3)', () => {
        const matrix = [
            [4, 5, 6, 7],
            [11, 10, 9, 8],
            [ 8, 11, 10, 0]
        ]
        expect(longestPath(matrix)).toEqual('4 5 6 7 8 9 10 11')
    })
})
