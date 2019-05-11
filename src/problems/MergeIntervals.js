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

module.exports = mergeIntervals