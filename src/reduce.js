const reduce = (arr, reducer, accumulator) => {
    if (accumulator == null && arr.length == 0){
        return undefined
    }
    if (accumulator != null){
        return arr.reduce(reducer, accumulator);
    }
    return arr.reduce(reducer);
}
module.exports = reduce;
