let arr_1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2]; // --> 276
let arr_2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26]; // --> 351
// add the array

function sumArray(numbers) {
    let sum = 0;
    for (const number of numbers) {
        sum += number;
    }
    return sum;
} 

const arr_1sum = sumArray(arr_1);
const arr_2sum = sumArray(arr_2);
const totalSum = arr_1sum + arr_2sum;
console.log('totalsumvalue::',totalSum);

