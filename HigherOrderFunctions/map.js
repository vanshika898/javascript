const a = [1,2,3,4];
// const b = a.map((i)=>i*3);

const b = a.map(triple);
console.log(b);

const k = b.filter((i)=>i%2 === 0);
console.log(k);

function triple(n){
return n*3;
}



const d = a.reduce(product);
console.log(d);
function product(a,b){
    return a*b;
}

