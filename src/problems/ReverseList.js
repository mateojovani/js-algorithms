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

module.exports = { List, buildReversed }
