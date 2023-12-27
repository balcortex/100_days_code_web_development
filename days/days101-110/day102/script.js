function createPerson(name) {
  let person = {
    name,
    greet() {
      console.log(`Hi! I'm ${this.name}`);
    },
  };
  return person;
}

const john = createPerson('John');
john.greet(); // Hi! I'm John

const alex = createPerson('Alex');
alex.greet(); // Hi! I'm Alex


function Person(name) {
  this.name = name;
  this.greet = function () {
    console.log(`Hi! I'm ${this.name}`);
  };
}

const jacob = new Person('Jacob');
jacob.greet(); // Hi! I'm Jacob