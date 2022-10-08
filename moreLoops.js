for (let i = 0; i < 5; i++) {
    // console.log(i);
}

const arr = [23, 43, 54, 39]
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    // console.log(element);
}

const marks = [69, 45, 98, 75, 91, 99, 85];
let max = 0;
let min = marks[0];
for (let i = 0; i < marks.length; i++) {
    const element = marks[i];
    if (element > max) {
        max = element;
    }
    if (element < min) {
        min = element;
    }
}
// console.log ("Highest value is: ", max);
// console.log ("Lowest value is: ", min);


const num = [13, 17, 14, 19, 16];
let temp = 0;
for (let i = 0; i < num.length; i++) {
    for (let j = i + 1; j < num.length; j++) {
        if (num[i] > num[j]) {
            temp = num[i]
            num[i] = num[j]
            num[j] = temp
        }
    }
}

// console.log(num);

/* 
---------------------------------------   sorting with sort function
*/

const number = [43, 54, 23, 65, 75, 21, 32]
number.sort(function (a, b) {
    return a - b
})

// console.log(number);

// ----------------   reverse 
number.sort(function (a, b) {
    return b - a
})

console.log(number);