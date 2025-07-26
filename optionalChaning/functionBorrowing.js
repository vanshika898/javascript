const user1 = {
    name: 'Prakash',
    age: 25,
    displayMessage(){
        console.log(this.age);
    }
};
user1.displayMessage();
const user2 = {
    name: 'Ashish',
    age: 30,
};

const user3 = {
    name: 'Suresh',
    age: 35,
};

function sayHi(degree,grade) {
    console.log(this.name,degree,grade);
}

sayHi.call(user1,"BTECH-COMPUTER",121);
sayHi.call(user2,"Computer science and engineering",122);