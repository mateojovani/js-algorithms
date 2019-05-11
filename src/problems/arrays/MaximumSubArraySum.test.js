const maxSubArrSum = require('./MaximumSubArraySum')

describe('the subarray with the largest sum', () => {
    it('example test', () => {
        expect(maxSubArrSum([-2, -5, 6, -2, -3, 1, 5, -6])).toEqual(7)
    })

    it('positive integers', () => {
        expect(maxSubArrSum([4, 4, 2, 1, 0, 9, 0])).toEqual(20)
    })

    it('negative integers', () => {
        expect(maxSubArrSum([-1, -3, -3, -2, -8])).toEqual(-1)
    })

    it('mix integers', () => {
        expect(maxSubArrSum([5, 0, 0, -2, -8, 1, 9, 0, 1])).toEqual(11)
    })
})
