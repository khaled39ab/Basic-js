//function example
function hello (name){  
    console.log(name);
}
hello("Modhu");


//return example
function add(num1, num2){  
    return num1 + num2
}
var result = add (20, 10);
console.log (result);


//default value set
function hello1 (names = "Anonymous"){ 
    console.log(names)
}
hello1();
hello1("Jodhu")


//undefiend parameter
function hello2 (name1, name2){  
    console.log(name1, name2);
}
hello2('Kodhu')


//spread parameter
function hello3 (...name3){  
    console.log(name3);
}
hello3('Kodhu', 'Modhu');
hello3('Jodhu', 'Modhu', 'Kodhu')


//local variable vs global variable
var i=12;              
function something(){
    i=10;
    console.log(i);
}
something();
console.log(i);


//Immediately Invoked Function Expressions(IIFE)
var sum = (function(){console.log (20 + 10);})(); 


//arrow function
var square = numb => numb * numb;
var add2 = (numb1, numb2)=> numb1 + numb2;
var math = (x, y) => {
    var sum2 = x + y;
    return sum2 * 2;
}