const min = (arr) => {
    if(arr==null || arr.length==0){
       return undefined
    }
        return Math.min.apply(null, arr)
}
module.exports = min;
