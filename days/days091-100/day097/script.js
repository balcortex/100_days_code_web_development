let user = {
    name: "John",           // key `name` stores value "John"
    age: 30,                // key `age` stores value 30
    "likes dogs": true,     // key `likes dogs` stores true
};
console.log(user["likes dogs"]); // true

let key = 'name';
console.log(user[key]); // John

console.log(user.key);  // undefined

let fruit = 'apple';
let shoppingList = {
    fruit: 5,
};
console.log(shoppingList); // Object { fruit: 5 }

let newShoppingList = {
    [fruit]: 5,
};
console.log(newShoppingList); // Object { apple: 5 }

function makeUser(name, age) {
    return {
        name: name,
        age: age,
    };
}
let john = makeUser('John', 30);
console.log(john)

function makeUserShorthand(name, age) {
    return {
        name,   // same as name: name
        age,    // same as age, age
    };
}
let alex = makeUserShorthand('Alex', 25);
console.log(alex)