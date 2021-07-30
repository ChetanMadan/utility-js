const max = (arr) => {
    if(arr==null || arr.length==0){
       return undefined
    }
        return Math.max.apply(null, arr)
}
module.exports = max;
