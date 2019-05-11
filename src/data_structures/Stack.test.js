const { Stack, SetOfStacks } = require('./Stack')


describe('construct a Stack', () => {
    let stack

    beforeEach(() => {
        stack = new Stack()
    })

    it('push check', () => {
        stack.push(3)
        stack.push(33)
        stack.push(2)

        expect(stack.length).toEqual(3)
        expect(stack.peek()).toEqual(2)
    })

    it('pop check', () => {
        stack.push(3)
        stack.push(33)
        stack.push(2)
        stack.pop()
        expect(stack.peek()).toEqual(33)
        stack.pop()
        expect(stack.peek()).toEqual(3)
    })
})

describe('construct a SetOfStacks', () => {
    let st

    beforeEach(() => {
        st = new SetOfStacks(3)
    })

    it('basic check', () => {
        st.push(34)
        st.push(1)
        st.push(4)
        st.push(5)
        st.peek()
        expect(st.peek()).toEqual(5)
        st.pop()
        st.pop()
        expect(st.peek()).toEqual(1)
        st.pop()
        st.pop()
        expect(st.peek()).toEqual(null)
    })
})
