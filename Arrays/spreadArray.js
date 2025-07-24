arr1 = [1,2,3];
arr2 = [4,5,6];

arr3 = [...arr1,4,5,6,...arr2];
console.log(arr1);
console.log(arr3);

// spread operatoe in objects

const oj1 = {a:1,b:2};
const oj2 = {c:3,d:4};
const oj3 = {...oj1,...oj2};

const oj4 = {...oj1,b:6};
console.log(oj4);
console.log(oj2);
console.log(oj3);