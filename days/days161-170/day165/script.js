function User(name, isAdmin) {
  this.name = name;
  this.isAdmin = isAdmin;
}

const user1 = new User("John", false);
const user2 = new User("Andy", true);

console.log(Object.getPrototypeOf(user1)); // Object {...}

console.log(Object.getPrototypeOf(user1) === Object.getPrototypeOf(user2)); // true

console.log(Object.getPrototypeOf(user1) === User.prototype); // true
