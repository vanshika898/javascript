const preson1 = {
    name :'vanshika',
    age :101,
    address :{
        city:"bhopal",
        state : "madhya pradesh"
    }
}
// object assign is also shallow copy
const person2 = preson1;

console.log(person2);
console.log(preson1);

person2.name  = 'neha'
console.log(person2);
console.log(preson1);


const person3 = Object.assign({},preson1);

person3.name = "jalini";
person3.age = 234
person3.address.city = "ujjain";
console.log(person3);
console.log(preson1);

