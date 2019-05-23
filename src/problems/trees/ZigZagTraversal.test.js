const { zigZag } = require('./ZigZagTraversal')

function Node(data) {
    this.data = data
    this.left = null
    this.right = null
}


it('zigZag view of a tree (1)', () => {
    let root = new Node(1)
    root.left = new Node(2)
    root.left.left = new Node(4)
    root.left.right = new Node(5)
    root.right = new Node(3)
    root.right.right = new Node(6)

    expect(zigZag(root)).toEqual('1 3 2 4 5 6')
})


it('zigZag view of a tree (2)', () => {
    let root = new Node(1)
    root.left = new Node(2)
    root.right = new Node(3)
    root.left.right = new Node(4)
    root.left.right.right = new Node(5)
    root.left.right.right.right = new Node(6)

    expect(zigZag(root)).toEqual('1 3 2 4 5 6')
})

it('zigZag view of a tree (3)', () => {
    let root = new Node(4)
    root.left = new Node(5)
    root.right = new Node(2)
    root.right.left = new Node(3)
    root.right.right = new Node(1)
    root.right.left.left = new Node(6)
    root.right.left.right = new Node(7)

    expect(zigZag(root)).toEqual('4 2 5 3 1 7 6')
})
