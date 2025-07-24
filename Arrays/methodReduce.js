const arr= [1,2,3,4,5,6];
const sumFunc = (a,b)=>a+b;

sum = arr.reduce(sumFunc,0);

console.log(arr);
console.log(sum);