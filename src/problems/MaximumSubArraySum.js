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

module.exports = maxSubArrSum
