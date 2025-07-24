arr1 = [1,2,3,4]; // it point a location

arr2  =arr1;// it also refering to same memory location

console.log("Arr 1- " + arr1);
console.log("Arr 2- " + arr2);

arr2.push(5);
// shallow copy
console.log("Arr 1- " + arr1);
console.log("Arr 2- " + arr2);
// solution to avoid this issue is use spread operator
arr3 = [...arr1];
arr4 = [...arr2];

arr3.push(6);
console.log(" one time updared Arr 1- " + arr3);
console.log(" one time updated Arr 2- " + arr4);
// create the copy using for loop

arr5 = [];
for(let num of arr1){
    arr5.push(num);
    
}
console.log(arr5);
