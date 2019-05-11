const buildFlatArr = (arr) => {
    let flatArr = []

    arr.forEach(child => {
        if (Array.isArray(child))
            flatArr = flatArr.concat(buildFlatArr(child))
        else flatArr.push(child)
    })

    return flatArr
}

module.exports = buildFlatArr
