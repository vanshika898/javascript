const obj = {
    name :"vanshika",
    address : "ujjain"
}

const entry = Object.entries(obj);
console.log(entry);


const key = Object.keys(obj);
console.log(key);

const value = Object.values(obj);
console.log(value);

const k = {
    x:1,
    y:2,
    z:3
}

const p = Object.values(k);
console.log(p);
let sum = 0;
for(let item of p){
 sum+= item;
}
console.log(sum);