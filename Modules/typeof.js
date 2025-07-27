//Temporal Dead Zone (TDZ)->e TDZ is the time between the variable's hoisting and its initialization. During this period, accessing 
// the variable results in a ReferenceError. Let's explore this with some code examples.

// console.log(x);
// console.log(y);
// let x=10;
// var y=2;
// console.log(x);
// console.log(y);

// console.log(a);

//TDZ starts here 
console.log(y);
console.log(x);
let x = 9 ; //TDZ ends here 
console.log(x);