let user = {
    forename: 'John',
};

console.log(user.surname); // undefined

console.log(user.forename === undefined); // false (it does exist)
console.log(user.address === undefined); // true (it doesn't exist)

let key = 'address';
console.log('forename' in user) // true (it does exist)
console.log(key in user) // false (it doesn't exist)

user.address = undefined;

console.log(user.address === undefined) // true (but the key does exist)
console.log('address' in user) // true (it does exist, but it's undefined)

for (const key in user) {
    console.log(key); // forename, address
    console.log(user[key]); // John, undefined
}