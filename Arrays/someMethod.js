const arr= [1,2,3,4,5,6];
const largestCheck = ((element)=>element<5);
const lessThan5 = arr.some(largestCheck);
console.log(arr);
console.log(lessThan5);