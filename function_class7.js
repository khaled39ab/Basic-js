function hello (name){  //function example
    console.log(name);
}
hello("Modhu");


function add(num1, num2){  //return example
    return num1 + num2
}
var result = add (20, 10);
console.log (result);


function hello1 (names = "Anonymous"){ //default value set
    console.log(names)
}
hello1();
hello1("Jodhu")


function hello2 (name1, name2){  //undefiend parameter
    console.log(name1, name2);
}
hello2('Kodhu')


function hello3 (...name3){  //spread parameter
    console.log(name3);
}
hello3('Kodhu', 'Modhu');
hello3('Jodhu', 'Modhu', 'Kodhu')


var i=12;              //local variable vs global variable
function something(){
    i=10;
    console.log(i);
}
something();
console.log(i);


var sum = (function(){console.log (20 + 10);})(); //Immediately Invoked Function Expressions(IIFE)