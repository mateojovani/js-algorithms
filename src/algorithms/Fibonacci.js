//Fibonacci sequence 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...

//Recursive
const fib = (n) => {
    if (n == 0 || n == 1)
        return n
    else
        return fib(n - 1) + fib(n - 2)
}

const fibSeqRec = (n) => {
    let seq = ''
    for (let i = 0; i <= n; i++) {
        seq += fib(i) + ' '
    }

    return seq
}

//iterative
const fibSeqIter = (n) => {
    let fib = [0, 1],
        seq = '0 1'

    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2]
        seq += ' ' + fib[i]
    }

    return seq
}

module.exports = { fibSeqRec, fibSeqIter }
