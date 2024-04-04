function User(name, isAdmin) {
  this.name = name;
  this.isAdmin = isAdmin;
}

let user1 = new User("John", false);

console.log(user1.valueOf()); // User {name: 'John', isAdmin: false}

console.log(Object.getPrototypeOf(User.prototype) === Object.prototype); // true

console.log(Object.prototype);
