function User(name, isAdmin) {
  this.name = name;
  this.isAdmin = isAdmin;
  this.revokeAdmin = function () {
    this.isAdmin = false;
  };
}

User.prototype.greet = function () {
  console.log(`Hi! I'm ${this.name}`);
};

const user1 = new User("John", false);
const user2 = new User("Andy", true);

user1.greet(); // Hi! I'm John
user2.greet(); // Hi! I'm Andy

console.log(user1); // User {name: 'John', isAdmin: false, revokeAdmin: ƒ}
