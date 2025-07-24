const obj1 = {
    name:'vanshika',
    city : 'ujjain'

}

const ispresent = "name" in obj1;
console.log(ispresent)

const ispesent = "age" in obj1;
console.log(ispesent)

for(let item in obj1){
    console.log(item,obj1[item]);
}