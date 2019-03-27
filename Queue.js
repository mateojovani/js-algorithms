function Node (data) {
    this.next = null
    this.prev = null
    this.data = data
}


function Queue () {
    this.top = null
    this.bottom = null
    this.length = 0

    this.push = (data) => {
        if (!this.top || !this.bottom) {
            this.bottom = this.top = new Node(data)
        } else {
            let currentTop = this.top
            this.top = new Node(data)
            this.top.next = currentTop
            currentTop.prev = this.top
        }

        this.length++
    }

    this.remove = () => {
        if (this.length) {
            this.length--
            let currentBottom = this.bottom
            this.bottom = currentBottom.prev
            if (this.bottom && this.bottom.next)
                this.bottom.next = null

            return currentBottom.data
        }

        return null
    }

    this.peek = () => this.bottom ? this.bottom.data: null
}

// let queue = new Queue()
// queue.push(3)
// queue.push(33)
// queue.push(2)
// console.log(queue.peek())
// queue.remove()
// queue.remove()
// console.log(queue.peek())
// queue.remove()
// queue.remove()
// console.log(queue.peek())

module.exports = Queue