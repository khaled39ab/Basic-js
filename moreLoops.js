// for (let i = 0; i < 5; i++){
//     console.log(i);
// }

// const arr = [23, 43, 54, 39]
// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     console.log(element);
// }

const marks = [69, 45, 98, 75, 91, 99, 85];
let max = 0;
// let min = marks[0];
for (let i = 0; i < marks.length; i++) {
    const element = marks[i];
    if (element > max) {
        max = element;
    } 
    // if (element < min) {
    //     min = element;
    // }
}
console.log ("Highest value is: ", max);
// console.log ("Lowest value is: ", min);