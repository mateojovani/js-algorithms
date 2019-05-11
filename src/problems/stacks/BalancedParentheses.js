const Stack = require("../../data_structures/Stack")
/**
 * Determine if a given sequence of parenthesis is a balanced sequence
 * "[()]{}{[()()]()}" print true
 * "[(])" print false
 */

const isOpenning = p => ["{", "[", "("].includes(p)

const isClosing = p => ["}", "]", ")"].includes(p)

const isMatching = (op, end) => {
    switch (end) {
        case "}":
            if (op === "{") return true
            return false
        case "]":
            if (op === "[") return true
            return false
        case ")":
            if (op === "(") return true
            return false
        default:
            return false
    }
}

const isBalancedPar = exp => {
    //init a Stack data structure
    let stack = new Stack()

    for (let i = 0; i < exp.length; i++) {
        let p = exp[i]

        //push parenthesis on the stack if openning
        if (isOpenning(p)) stack.push(p)

        //pop parenthesis from stack if closing
        if (isClosing(p)) {
            if (stack.length === 0)
                return false

            if (!isMatching(stack.pop(), p))
                return false
        }
    }

    if (stack.length === 0)
        return true

    return false
}

module.exports = isBalancedPar