const { leftView } = require('./LeftView')

function Node(data) {
    this.data = data
    this.left = null
    this.right = null
}


it('left view of a tree (1)', () => {
    let root1 = new Node(1)
    root1.left = new Node(2)
    root1.left.left = new Node(4)
    root1.left.right = new Node(5)
    root1.right = new Node(3)
    root1.right.right = new Node(6)

    expect(leftView(root1)).toEqual('1 2 4')
})


it('left view of a tree (2)', () => {
    let root2 = new Node(1)
    root2.left = new Node(2)
    root2.right = new Node(3)
    root2.left.right = new Node(4)
    root2.left.right.right = new Node(5)
    root2.left.right.right.right = new Node(6)

    expect(leftView(root2)).toEqual('1 2 4 5 6')
})

it('left view of a tree (3)', () => {
    let root3 = new Node(4)
    root3.left = new Node(5)
    root3.right = new Node(2)
    root3.right.left = new Node(3)
    root3.right.left.left = new Node(6)
    root3.right.left.right = new Node(7)

    expect(leftView(root3)).toEqual('4 5 3 6')
})
