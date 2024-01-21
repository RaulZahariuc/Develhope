function filterArray(arr, callback) {
    const filteredArray = arr.filter(callback);
    return filteredArray;
}

function isEven(num) {
    return num % 2 === 0;
}

const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = filterArray(numbers, isEven);
console.log(evenNumbers); 
