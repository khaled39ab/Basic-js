var promise = "I promise that I will work HARD and I will become a programmer."

//toLowerCase Method
console.log (promise.toLowerCase());

//toUpperCase 
console.log (promise.toUpperCase());

//indexOf() - To know element position
console.log (promise.indexOf("will"));
console.log (promise.indexOf("hard"));

//split()
console.log (promise.split(' '));


//parseFloat()- string to float number
var num = '25.55'
num = parseFloat(num);
console.log (num);


//parsrInt()- string to integer
num = parseInt(num);
console.log (num);


//toFixed() 
num = 25.654;
num = num.toFixed(2);
console.log(num);


//math oparetor
num = -56;          //absulate 
num = Math.abs (num);
console.log (num);

num = 43.500;    //math round
num = Math.round (num);
console.log (num);

num = 43.499;    //math round
num = Math.round (num);
console.log (num);

num = 49.001;    //math ceil
num =Math.ceil (num);
console.log (num);

num = 49.999;    //math floor
num =Math.floor (num);
console.log (num);

//random number
num = Math.random();
console.log (num);
num = Math.ceil(num * 100);
console.log (num);

console.log (Math.PI); //value of pi

console.log (Math.sqrt(64)); // square root

console.log (Math.pow(8,2)); // the power

console.log (Math.min(5,45,54,2,65,13,24)); //find minimum number

console.log (Math.max(5,45,54,2,65,13,24)); //find maximum number