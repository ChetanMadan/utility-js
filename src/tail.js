const tail = (arr) => {
    if(arr==null || arr.length==0){
        return [];
    }
    else{
        return arr.slice(1);
    }

}
module.exports = tail;
