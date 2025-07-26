const user1 = {
    name: 'Prakash',
    age: 25,
};

const user2 = {
    name: 'Ashish',
    age: 30,
};

const user3 = {
    name: 'Ria',
    age: 22,
};

function sayHi() {
    console.log(`Hi, my name is ${this.name}.`);
}