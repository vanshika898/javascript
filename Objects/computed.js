const readLineSync = require("readline-sync");
const pro = readLineSync.question("what you want to know about user(name/class/adress) :");
const course= readLineSync.question("what is course you want to learn (HTML/CSS/JAVASCRIPT):");
const obj = {
    name :"vanshika",
    class:"btech",
    adress:"ujjain",
    1:"one one eleven",
     [course]: "no, there is no course currently available",
};
obj.city = "madhya pradesh";


console.log(obj[course]);
console.log(obj[pro]);