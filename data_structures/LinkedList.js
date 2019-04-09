function Node (data) {
    this.data = data
    this.prev = null
    this.next = null
}

function List () {
    this.head = null
    this.length = 0

    this.get = (index) => {
        let current = this.head
        let i = 0
        if (index >= this.length)
            index = this.length - 1

        while (current && i !== index) {
            current = current.next
            i++
        }

        return current
    }

    this.add = (data, index) => {
        let node = new Node(data)
        let current = this.head
        let length = this.length
        let i = 0
        this.length++
        if (!current) //empty list
            return this.head = node

        if (index && index >= length)
            index = length - 1

        if (index != undefined) {
            while (current && i < index) {
                current = current.next
                i++
            }

            if (length > 0 && index === 0) { //add to head
                current.prev = node
                node.next = current
                this.head = node
            } else { //add inside
                node.next = current.next
                current.next = node
                node.prev = current
                if (node.next && node.next.prev)
                    node.next.prev = node
            }
        } else { //add to tail
            while (current.next)
                current = current.next

            current.next = node
            node.prev = current
        }
    }

    this.remove = (index = 0) => {
        let i = 0;
        if (index >= this.length)
            index = this.length - 1

        let current = this.head

        if(index === 0) { // head
            this.head = current.next
            this.head.prev = null
        } else if (index === this.length - 1) {
            while (current.next)
                current = current.next
            current.prev.next = null
        } else {
            while (current && i !== index) {
                current = current.next
                i++
            }
            let prev = current.prev, next = current.next
            prev.next = next
            next.prev = prev
            current = null
        }

        this.length--
    }

    this.toArray = () => {
        let arr = new Array(this.length).fill(0)
        return arr.map((_, index) => this.get(index).data)
    }
}

// let list = new List()

// list.add(1)
// list.add(2)
// list.add(3)
// list.add(5)
// list.add(4, 2)
// list.add(0, 0)
// list.add(20, 6)
// list.add(-1, 0)
// list.add(21)
// list.remove(7)
// list.remove(0)
// list.remove(9)
// list.add(6)

// console.log(list.toArray())

// const getListTail = (list) => {
//     let cur = list.head
//     while (cur.next) {
//         cur = cur.next
//     }

//     return cur
// }

// const buildReversed = (list) => {
//     let tail = getListTail(list)
//     let reversed = new List()

//     while (tail.prev) {
//         reversed.add(tail.data)
//         tail = tail.prev
//     }

//     reversed.add(tail.data)
//     return reversed
// }

// console.log(buildReversed(list).toArray())