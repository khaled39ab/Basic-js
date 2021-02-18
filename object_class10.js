var person = {
    firstName : "Hero",
    lastName : "Alom",
    age : 32,
    address : {
        city : "Dhaka",
        zipCode : 1212 
    }
}

// To know property value in diffrent 3 ways
var personAge = person.age;
console.log (personAge);

var personFirstName = person ['firstName'];
console.log (personFirstName);

var lookingFor = 'lastName';
var personLastName = person [lookingFor];
console.log (personLastName);


//set new value for property in diffrent ways
person.address.city = 'Bogura';
console.log (person.address.city);

person ['lastName'] = 'Khan';
console.log (person.lastName);

var lookingFor = 'age';
var newAge = person[lookingFor];
person[lookingFor] = 40;
console.log (person.age);