// We're going to be rebuilding the animal kingdom in javascript! We're going to be using es6 classes to accomplish this.

// We first need the base class for all of our future animals.
// Create a class called "Mammal" which a constructor that takes in the age and amount of legs the mammal has. It should also have a property called "alive" that's set to true by default.
class Mammal{
  constructor(age, legs){
    this.age = age;
    this.legs = legs;
    this.alive = true;
  }
}

let kevin = new Mammal(12, 2);
console.log(kevin.age, kevin.legs)



// Lets make a animal!
// Create a class called "Bear" that inherits from the Mammal class. The Bear class should have its own property called "berriesAte" that should be set to 0 by default.
// Add a method to the Bear class called "eat" that increments the amount of berries that the bear has ate.
// Finally create a new bear and set the age to be 8 and legs to be 4 and then have the bear eat twice.
class Bear extends Mammal{
  constructor(age, legs){
    super(age, legs);
    this.berriesAte = 0;
  }
  eat(){
    this.berriesAte++;
  }
}

let iceBear = new Bear(8, 4);
iceBear.eat();
iceBear.eat();
console.log(iceBear);



// HoneyBadger Time :D
// Create a class called "HoneyBadger" that inherits from the Mammal class. The HoneyBadger class should have a method called "attack" that takes in another object and sets it's "alive" property to false.
// Create a new HoneyBadger and set the age to be 3 and the legs to be 4 and then have him attack the bear you made in the previous challenge. Confirm the bear is dead by console.logging the bear!
class HoneyBadger extends Mammal{
  constructor(age, legs){
    super(age, legs);
  }
  attack(animal){
    animal.alive = false;
  }
}

let troy = new HoneyBadger(3, 4);
troy.attack(iceBear);
console.log(iceBear);
