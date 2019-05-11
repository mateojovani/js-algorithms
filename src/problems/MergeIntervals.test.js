
const mergeIntervals = require("./MergeIntervals")


describe("merge intervals", () => {
    it("example", () => {
        expect(mergeIntervals([1, 3], [2, 6], [8, 10], [15, 18])).toEqual([[1, 6], [8, 10], [15, 18]])
    })

    it("edge case 1", () => {
        expect(mergeIntervals([1, 3])).toEqual([[1, 3]])
    })

    it("edge case 2", () => {
        expect(mergeIntervals([1, 7], [4, 5])).toEqual([[1, 7]])
    })

    it("edge case 3", () => {
        expect(mergeIntervals([1, 7], [7, 9])).toEqual([[1, 9]])
    })

    it("compplex", () => {
        expect(mergeIntervals([1, 4], [2, 3], [5, 9], [7, 10], [23, 35], [29, 40])).toEqual([[1, 4], [5, 10], [23, 40]])
    })
})