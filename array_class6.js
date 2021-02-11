var friendName = ["Pintu", "Montu", "Jhontu", "Laltu"]; //declare array
console.log(friendName);

console.log(friendName[2]); //call indivisual element

friendName.push("Kantu"); //add a name
console.log(friendName);

var position = friendName.indexOf("Laltu"); //element position
console.log(position);

friendName.pop(); //delete a name
console.log(friendName);

friendName.unshift("Boltu","Santu"); //add in front
console.log(friendName);

friendName.shift();  //delete in front
console.log(friendName);

var part = friendName.slice(2,4);  //part of array
console.log(part);

var part2 = friendName.splice(4,1);  //cut from arry
console.log(part2);

var list = friendName.concat(part2);  //adding 2 array
console.log(list);

for (i in list){     //getting every element
    console.log(list[i]);
}

var count = list.split("");
console.log (count.length);