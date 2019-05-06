const expect = require("chai").expect
const List = require("../data_structures/LinkedList")

const getListTail = (list) => {
    let cur = list.head
    while (cur.next) {
        cur = cur.next
    }

    return cur
}

const buildReversed = (list) => {
    let tail = getListTail(list)
    let reversed = new List()

    while (tail.prev) {
        reversed.add(tail.data)
        tail = tail.prev
    }

    reversed.add(tail.data)
    return reversed
}

/**
 * Assert
 */
it('reverse a list', () => {
    let list = new List()

    list.add(1)
    list.add(2)
    list.add(3)
    list.add(5)
    list.add(4, 2)
    list.add(0, 0)
    list.add(20, 6)
    list.add(-1, 0)
    list.add(21)
    list.remove(7)
    list.remove(0)
    list.remove(9)
    list.add(6)

    let rev = buildReversed(list).toArray()

    expect(rev).to.deep.equal([ 6, 5, 4, 3, 2, 1, 0 ])
})
