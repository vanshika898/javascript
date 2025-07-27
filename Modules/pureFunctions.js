function add (num){
    return num*2;
}

console.log(add(2));

// t takes an input (number).
// It returns a value (number * 2).
// It doesn't modify any external variables.
// The result is always the same for the same input.



function appendArr(arr){ ///this is impure function becaues it mutate original array
    arr.push(5,6);
    return arr;
}

let num = [1,2,3,4];
console.log(appendArr(num));



//making it pure

function appendit(num){
    let newArr = [...num,5,6];
    return newArr;
}

let num1 = [1,2,3];
console.log(appendit(num));
