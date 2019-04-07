let array = [[1,[1,4],3],2,[[[5]]],0]

const buildFlatArr = (arr) => {
    let flatArr = []

    arr.forEach(child => {
        if (Array.isArray(child))
            flatArr = flatArr.concat(buildFlatArr(child))
        else flatArr.push(child)
    })

    return flatArr
}

console.log(buildFlatArr(array))