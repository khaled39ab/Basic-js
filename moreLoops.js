// for (let i = 0; i < 5; i++){
//     console.log(i);
// }

// const arr = [23, 43, 54, 39]
// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     console.log(element);
// }

// const marks = [69, 45, 98, 75, 91, 99, 85];
// let max = 0;
// let min = marks[0];
// for (let i = 0; i < marks.length; i++) {
//     const element = marks[i];
//     if (element > max) {
//         max = element;
//     } 
//     if (element < min) {
//         min = element;
//     }
// }
// console.log ("Highest value is: ", max);
// console.log ("Lowest value is: ", min);

/* let sort = [];

for (let i = 0; i < marks.length; i++){
    const ele = marks[0];
    if (ele > min){
        sort.push(min);
    }
}

console.log(sort); */
const num = [13, 17, 14, 19, 16];
let temp;
for (let i = 0; i < num.length; i++) {
    for(let j=i+1;j<num.length;j++){
        if(num[i]>num[j]){
            temp=num[i]
            num[i]=num[j]
            num[j]=temp
        }
    }
}

console.log(num);