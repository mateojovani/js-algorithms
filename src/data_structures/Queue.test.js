const Queue = require('./Queue')


describe('construct a Queue', () => {
    let queue

    beforeEach(() => {
        queue = new Queue()
    })

    it('push check', () => {
        queue.push(3)
        queue.push(33)
        queue.push(2)

        expect(queue.length).toEqual(3)
        expect(queue.peek()).toEqual(3)
    })

    it('dequeue check', () => {
        queue.push(3)
        queue.push(33)
        queue.push(2)
        queue.remove()
        expect(queue.peek()).toEqual(33)
        queue.remove()
        expect(queue.peek()).toEqual(2)
    })

    it('dequeue limit', () => {
        queue.push(3)
        queue.push(33)
        queue.push(2)
        queue.remove()
        queue.remove()
        queue.remove()

        expect(queue.length).toEqual(0)
        expect(queue.peek()).toEqual(null)
    })
})
