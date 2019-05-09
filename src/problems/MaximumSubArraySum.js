const expect = require("chai").expect

/** ------------------------------------------------------------------------------------
 * Problem
 * --------------------------------------------------------------------------------------
 * Given a one dimensional array that may contain both positive and negative integers,
 * find the sum of contiguous subarray of numbers which has the largest sum.
 * ex. [-2, -5, 6, -2, -3, 1, 5, -6], then the maximum subarray sum is 7
 * ---------------------------------------------------------------------------------------
 */

const maxSubArrSum = list => {
    let endSum = 0
    let localSum = 0
    let revertToNegatives = true
    let biggestNegative = -Infinity

    list.forEach(n => {
        localSum += n
        if (localSum < 0) {
            if (revertToNegatives && (localSum > biggestNegative)) {
                biggestNegative = localSum
            }
            localSum = 0
        } else {
            revertToNegatives = false
        }

        if (endSum < localSum) {
            endSum = localSum
        }
    })

    if (revertToNegatives) return biggestNegative

    return endSum
}

/**---------------------------------------------------------------------------------
 * Assert
 * ---------------------------------------------------------------------------------
 */
describe("the subarray with the largest sum", () => {
    it("example test", () => {
        expect(maxSubArrSum([-2, -5, 6, -2, -3, 1, 5, -6])).to.equal(7)
    })

    it("positive integers", () => {
        expect(maxSubArrSum([4, 4, 2, 1, 0, 9, 0])).to.equal(20)
    })

    it("negative integers", () => {
        expect(maxSubArrSum([-1, -3, -3, -2, -8])).to.equal(-1)
    })

    it("mix integers", () => {
        expect(maxSubArrSum([5, 0, 0, -2, -8, 1, 9, 0, 1])).to.equal(11)
    })
})
