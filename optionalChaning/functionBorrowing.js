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

//Use aplly method

sayHi.apply(user1,["Btech",2010]);
sayHi.apply(user2,["computer",2014]);

const result = sayHi.bind(user1,"Btech");
result(2022);