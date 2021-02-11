//while loop
var i=0;
while( i++ < 5 ){    // check i<5 then i+1 then print
    console.log(i);
}
console.log("\n" , "------", "\n");

var i=0;
while( ++i < 5 ){     //  i+1 then check i<5  then print
    console.log(i);
}


//do... while loop
console.log("\n" , "------", "\n") ;
var i = 0;

do{
    console.log(i);
    i++;
}while( i <= 10);


//for loop
console.log("\n" , "------", "\n") ;

for(var i=0, j=10; i<=10; i++,j--){
    console.log(i,j);
} 


console.log("\n" , "------", "\n") ;
// factorial
var n=5;
var factorial=1;
for(var i=n; i>1; i--){
    factorial = factorial * i;
}
console.log(factorial);


console.log("\n" , "------", "\n") ;
// factorial of 1 to 10
var factorial = 1;
for(var i=1; i<=10; i++){
    factorial =factorial * i; //factorial *=i

    console.log("The Factorial of", i , "is", factorial)
}


console.log("\n" , "------", "\n") ;
//fibonacci serise
var  fibo=[0, 1]
for (var i=2; i<=10;i++){
    fibo[i]=fibo[i-1]+fibo[i-2];
}
console.log(fibo);
