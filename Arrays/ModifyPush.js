const arr = ["vanshika","Tanisha","Tisha","Sachi"];
arr.push("piyush");
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}
console.log('------------------');
//pop
arr.pop();
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);//removes first element
}
console.log('------------------');
//shift
arr.shift();
for(let i=0;i<arr.length;i++){//removes first element
    console.log(arr[i]);
}
//splice --removes one element at one index
console.log('------------------');
arr.splice(1,1);
for(let i=0;i<arr.length;i++){//removes first element
    console.log(arr[i]);
}
// toUppermcase
let upperNames = arr.map(names =>names.toUpperCase());
console.log(upperNames);

//filter 
const arr1 = ["vanshika","Tanisha","Tisha","Sachi"];
let filtered = arr1.filter(names=>names.length>5);
console.log(filtered)