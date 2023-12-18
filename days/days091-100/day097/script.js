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