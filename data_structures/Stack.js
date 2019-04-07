function Node (data) {
    this.next = null
    this.data = data
}

function Stack () {
    this.top = null
    this.length = 0

    this.push = (data) => {
        if (!this.top)
            this.top = new Node(data)
        else {
            let currentTop = this.top
            this.top = new Node(data)
            this.top.next = currentTop
        }

        this.length++
    }

    this.pop = () => {
        if (this.length) {
            this.length--
            let currentTop = this.top
            this.top = currentTop.next

            return currentTop.data
        }

        return null
    }

    this.peek = () => this.top ? this.top.data: null
}

// Set of Stacks
function SetOfStacks (stackThreshold = 3) {
    this.stacks = [new Stack()]

    this.push = (data) => {
        let currentStack = this.stacks[this.stacks.length - 1]
        if (currentStack.length >= stackThreshold) {
            currentStack = new Stack()
            this.stacks.push(currentStack)
        }

        currentStack.push(data)
    }

    this.pop = () => {
        let currentStack = this.stacks[this.stacks.length - 1]
        let data = currentStack.pop()

        if(currentStack.length === 0)
            this.stacks.pop()

        return data
    }

    this.peek = () => this.stacks.length ? this.stacks[this.stacks.length - 1].peek(): null
}

let st = new SetOfStacks(3)

st.push(34)
st.push(1)
st.push(4)
st.push(5)
console.log(st.peek())
st.pop()
st.pop()
console.log(st.peek())
st.pop()
st.pop()
console.log(st.peek())