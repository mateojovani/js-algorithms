const expect = require("chai").expect

/**-------------------------------------------------------------------
 * Problem: Merge Intervals
 * -------------------------------------------------------------------
 *
 * Given a collection of intervals, merge all overlapping intervals.
 *
 * ex. [1,3],[2,6],[8,10],[15,18],
 * return [1,6],[8,10],[15,18]
 * -------------------------------------------------------------------
 */

const mergePair = (interval1, interval2) => {
    if (interval2[0] <= interval1[1]) //overlap
        return [
            [interval1[0], Math.max(interval1[1], interval2[1])]
        ]
    else
        return [
            interval1, interval2
        ]
}

const mergeIntervals = (...intervals) => {
    // sort intervals (/!\ mutation)
    intervals.sort((a, b) => a[0] - b[0])

    let mergedIntervals = [intervals[0]]

    //loop and merge pairs
    let index = 1
    while (index < intervals.length) {
        let pair = mergePair(
            mergedIntervals[mergedIntervals.length - 1],
            intervals[index]
        )
        mergedIntervals.pop()

        if (pair.length === 1)
            mergedIntervals.push(pair[0])
        else
            mergedIntervals = mergedIntervals.concat(pair)

        index++
    }

    return mergedIntervals
}

/**------------------------------------------------------------------
 * Assert
 * ------------------------------------------------------------------
 */

describe("merge intervals", () => {
    it("example", () => {
        expect(mergeIntervals([1, 3], [2, 6], [8, 10], [15, 18])).to.deep.equal([[1, 6], [8, 10], [15, 18]])
    })

    it("edge case 1", () => {
        expect(mergeIntervals([1, 3])).to.deep.equal([[1, 3]])
    })

    it("edge case 2", () => {
        expect(mergeIntervals([1, 7], [4, 5])).to.deep.equal([[1, 7]])
    })

    it("edge case 3", () => {
        expect(mergeIntervals([1, 7], [7, 9])).to.deep.equal([[1, 9]])
    })

    it("compplex", () => {
        expect(mergeIntervals([1, 4], [2, 3], [5, 9], [7, 10], [23, 35], [29, 40])).to.deep.equal([[1, 4], [5, 10], [23, 40]])
    })
})