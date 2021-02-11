//if else condition
var num=19;
if ( num >= 10 ){
    console.log("The number", num,"is greater or equal to 10");
} else{
    console.log("The number", num,"is less than 10")
}

// even odd program
var numb = 121;
var result;
var remainder = numb % 2;

if( 0 == numb){
    result = "It is a neutral number";
} else if( 0 == remainder){
   result = "It is even number";
} else{
   result = "It is odd number";
}
console.log(result);

//Exam result
var number = 50;
var examResult;
if( 0 <= number && number <= 32){
    examResult = "You are fail!!";
} else if ( 33 <= number && number <= 39 ){
    examResult = "You got D";
} else if ( 40 <= number && number <= 49 ){
    examResult = "You got C";
} else if ( 50 <= number && number <= 59 ){
    examResult = "You got B";
} else if ( 60 <= number && number <= 69 ){
    examResult = "You got A-";
} else if ( 70 <= number && number <= 79 ){
    examResult = "You got A";
} else if ( 80 <= number && number <= 100 ){
    examResult = "You got A+";
} else{
    examResult ="Invalid Number!!";
}
console.log(examResult);