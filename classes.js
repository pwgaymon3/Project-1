// -------------------------------
// 🔹 GENERAL KNOWLEDGE QUESTIONS
// -------------------------------

// 1) What does OOP stand for, and why do we use it?
// Object Oriented Programming

// 2) What is an object in JavaScript?

// 3) What are properties and methods? Give an example of each.

// 4) What is a class, and how is it different from an object?

// 5) What is a constructor, and when is it automatically called?

// 6) What keyword do we use to create a new instance (object) of a class?

// 7) What does the "this" keyword refer to inside a class?

// 8) What does "extends" mean when defining a class?

// 9) What is the purpose of the "super()" keyword inside a subclass?

// 10) Name and briefly describe the 4 pillars of OOP.

// -------------------------------
// 🔹 FILL-IN-THE-BLANK
// -------------------------------

// 1) Complete the class below so it correctly defines a Person with a name and age,
// and a method introduce() that logs “Hi, my name is <name> and I am <age> years old.”

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
  }

  haveBirthday(age) {
    this.age++;
    console.log(`Happy Birthday, ${this.name}!`);
  }
}

const person1 = new Person("Martin", 33);
const person2 = new Person("Preston", 29);
person1.introduce();

// 2) Complete the following class definition for Animal.
// It should have a constructor with species and sound parameters,
// and a makeSound() method that logs “<species> says <sound>!”

class Animal {
  constructor(species, sound) {
    this.species = species;
    this.sound = sound;
  }

  makeSound() {
    console.log(`${this.species} says ${this.sound}!`);
  }
}

class Dog extends Animal {
  constructor(species, sound, breed) {
    super(species, sound);
    this.breed = breed;
  }

  fetch(breed) {
    console.log(`The ${this.breed} fetches the ball!`);
  }
}

const doge = new Dog("dog", "woof", "Bulldog");
doge.fetch();

const cat = new Animal("Cat", "Meow");
cat.makeSound();

class Rectangle {
  #width;
  #height;
  constructor(width = 5, height = 5) {
    this.#width = width;
    this.#height = height;
  }
  get height() {
    return this.#height;
  }
  get width() {
    return this.#width;
  }
  set height(value) {
    this.#height = value;
  }
  set width(value) {
    this.#width = value;
  }
  getArea() {
    console.log(this.#width * this.#height);
  }
}

const r1 = new Rectangle(10, 20);
r1.getArea();

class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  start() {}

  stop() {}
}

class Truck extends Vehicle {
  constructor(make, model, cargoWeight) {
    super(make, model);
    this.cargoWeight = cargoWeight;
  }

  loadCargo(weight) {
    let initialWeight = 0;

    weight += initialWeight;
    console.log(`New weight is ${initialWeight}lbs`);
  }

  start() {
    console.log("The beast roars as it awakens!");
  }
}

class Account {
  #balance;
  constructor(owner, balance) {
    this.owner = owner;
    this.#balance = balance;
  }

  deposit(amount) {}

  withdraw(amount) {}

  getBalance() {}
}

class SavingsAccount extends Account {
  #balance;
  constructor(owner, balance) {
    super(owner, balance);
  }

  interestRate() {}

  addInterest() {}
}

class BusinessAccount extends Account {
  #balance;
  constructor(owner, balance) {
    super(owner, balance);
  }

  overdraftLimit() {}

  withdraw(amount) {}
}
// -------------------------------
// 🔹 CODING EXERCISES
// -------------------------------

// 3) Add a method haveBirthday() to Person that increases the age by 1 and logs a message showing the new age.

// 4) Create a subclass called "Dog" that extends Animal.
// Add a constructor that uses super() and includes a breed property.
// Add a fetch() method that logs "The <breed> is fetching the ball!"

// 5) Create a class "Rectangle" with private properties #width and #height.
// Add a method getArea() that returns the area (width * height).

// 6) Add getters and setters for #width and #height to allow controlled access and updates.

// 7) Create a base class "Vehicle" with make and model, and methods start() and stop().

// 8) Create a subclass "Truck" that extends Vehicle and adds a property cargoWeight.
// Add a loadCargo(weight) method that increases cargoWeight and logs a message.
// Override the start() method to include a custom message.

// 9) Create a class "Account" with a private property #balance, a constructor for owner and balance,
// and methods deposit(amount), withdraw(amount), and getBalance().

// 10) Create subclasses "SavingsAccount" (adds interestRate + addInterest method)
// and "BusinessAccount" (adds overdraftLimit + overridden withdraw method).

// 11) Create instances of both account types and test their methods.
// Demonstrate encapsulation by trying to access #balance directly (should error).

// 12) BONUS: Create a Shape class, then extend it with Circle and Square,
// each with their own getArea() formula.

// 13) BONUS: Create a Bank class that holds multiple Account objects and calculates totalBalances().
