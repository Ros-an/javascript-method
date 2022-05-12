/**
 * .chunk(array, sizeOfArray) -> takes an array and return array of elements(where each element is an array of length sizeOfArray passed)
 */
function chunk(array, size) {
    if(size === undefined){
        size = 1;
    }else{
        size = Math.max(size,0);
    }
    let length = array === null ? 0 : array.length;
    let index = 0;
    let resIndex = 0;
    let result = Array(Math.ceil(length/size))
}
chunk([1,2,3,4,5],2);