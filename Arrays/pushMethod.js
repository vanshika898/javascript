array = [1,2,3,4,5];
array.push(6);

array.push(21,22,23,24);
array.forEach(element => {
    console.log(element)
});

console.log("removed element from the array :"+array.pop());