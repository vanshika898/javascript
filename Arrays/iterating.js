const arr = ["vanshika","Tanisha","Tisha","Sachi"];
console.log(arr);
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}


for(let name of arr){
    console.log(`names are :${name}`);
}
for(let name in arr){
    console.log(`names index:${name}`);
}