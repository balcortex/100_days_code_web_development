function makeUser(name, age) {
    return {
        name: name,
        age: age,
    };
}
let john = makeUser('John', 30);
console.log(john); // Object { name: "John", age: 30 }

function makeUserShorthand(name, age) {
    return {
        name,   // same as name: name
        age,    // same as age, age
    };
}
let alex = makeUserShorthand('Alex', 25);
console.log(alex); // Object { name: "Alex", age: 25 }

// these properties are all right
let obj = {
    for: 1,
    let: 2,
    return: 3,
    _$3: 4,
};

console.log(obj.for + obj.let + obj.return + obj._$3);  // 10

let obj2 = {
    0: 'Zero', // same as '0': 'Zero'
};

console.log(obj2[0]); // Zero
console.log(obj2['0']); // Zero