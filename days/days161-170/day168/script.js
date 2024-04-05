function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  console.log(`Hi I'm ${this.name}`);
};

function User(name, isAdmin) {
  this.name = name;
  this.isAdmin = isAdmin;
}

Object.setPrototypeOf(User.prototype, Person.prototype);

let user1 = new User("John", false);

user1.greet(); // Hi I'm John

console.log(Object.getPrototypeOf(user1) === User.prototype); // true
console.log(Object.getPrototypeOf(User.prototype) === Person.prototype); // true
console.log(Object.getPrototypeOf(Person.prototype) === Object.prototype); // true
console.log(Object.getPrototypeOf(Object.prototype) === null); // true
