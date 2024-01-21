function doubleArray(arr, callback) {
    const doubledArray = arr.map(callback);
    return doubledArray;
}

function doubleValue(num) {
    return num * 2;
}

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = doubleArray(numbers, doubleValue);
console.log(doubledNumbers); 
