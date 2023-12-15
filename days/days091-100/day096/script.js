let user = {
    name: "John",   // key `name` stores value "John"
    age: 30,        // key `age` stores value 30
};

console.log(user); // Object { name: "John", age: 30 }

console.log(user.name) // John
console.log(user.age) // 30

user.isAdmin = true;

console.log(user); // Object { name: "John", age: 30, isAdmin: true }

delete user.age;

console.log(user); // Object { name: "John", isAdmin: true }