const obj = {
    name: 'Prakash',
    address: {
        street: '123 Main St',
        city: 'Mumbai',
        state: 'Maharashtra'
    },
    courses: ['JavaScript', 'React', 'Node.js']
};

const {name,address,address:{city,state}} = obj;
console.log(name);
console.log(address);
console.log(city);
console.log(state);