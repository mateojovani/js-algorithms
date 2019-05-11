const { Tree, traverse, verticalSum } = require("./VerticalSum")

it('vertical sum', () => {
    let bst = new Tree()
    bst.add(7)
    bst.add(8)
    bst.add(2)
    bst.add(1)
    bst.add(0)
    bst.add(9)
    bst.add(34)
    bst.add(3)

    traverse(bst.root)

    expect(verticalSum).toEqual({ '0': 10, '1': 8, '2': 9, '3': 34, '-1': 2, '-2': 1, '-3': 0 })
})