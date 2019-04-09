const List = require("../data_structures/LinkedList")

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

console.log(list.toArray())

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

console.log(buildReversed(list).toArray())