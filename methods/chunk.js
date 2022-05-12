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
    let result = Math.ceil(length/size); // if length = 5 and size =2 => 3
    result = Array(result); //if result = 3 => [empty x 3] - like array of size 3 but they are empty slots

    console.log(array, size, length, result);
}
chunk([1,2,3,4,5],2);