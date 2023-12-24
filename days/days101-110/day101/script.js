const user = {
  name: {
    first: 'John',
    last: 'Smith',
  },
  age: 32,
  info: function () {
    console.log(`${this.name.first} ${this.name.last} is ${this.age} years old`);
  },
  greet() {
    console.log(`Hi! I'm ${this.name.first}`);
  },
};

user.info(); // John Smith is 32 years old
user.greet(); // Hi! I'm John