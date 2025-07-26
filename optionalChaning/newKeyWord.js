function User (name,age){
    (this.name = name),
    (this.age = age)

}

const  usr1 = new User("prakash",101);
const user2 = new User("Vanshika",102);
console.log(usr1);
console.log(user2);
console.log(usr1.name);