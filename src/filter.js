const filter = (arr, op) => {
    return arr.filter(x => op(x))
}
module.exports = filter;
