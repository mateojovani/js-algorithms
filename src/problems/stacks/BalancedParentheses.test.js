const isBalancedPar = require('./BalancedParentheses')

describe('is balanced parenthesis', () => {
    it('complex', () => {
        expect(isBalancedPar('[()]{}{[()()]()}')).toEqual(true)
        expect(isBalancedPar('{(([{}]))}')).toEqual(true)
    })

    it('simple', () => {
        expect(isBalancedPar('[(])')).toEqual(false)
    })

    it('edge case', () => {
        expect(isBalancedPar('[')).toEqual(false)
    })
})
