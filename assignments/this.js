/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding - When in the global scope, the value of "this" will be the window/console Oject. It's when we don't have an object or a class to call.
* 2. Implicit Binding - Whenever a function is called by a preceding dot, the object of the dot gets 'this'.
* 3. New Binding - Whenever a constructor function is used, this refers to the specific instance of the object that is created and returned by the constructo function.
* 4. Explicit Binding - Whenever JavaScript's call or apply method is used, this is explicitly defined.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function sayName(name) {
    console.log(this);
    return name;
  }
  sayName("Sam");

// Principle 2

// code example for Implicit Binding

const myObj = {
    greeting: 'Hello',
    speak: function(name) {
      console.log(`${this.greeting} my name is ${name}`);
      console.log(this);
    }
  };
  myObj.speak('Joe');

// Principle 3

// code example for New Binding

function CordialPerson(greeter) {
    this.greeting = 'Hello ';
    this.greeter = greeter;
    this.speak = function() {
      console.log(this.greeting + this.greeter);
      console.log(this);
    };
  }
  
  const jerry = new CordialPerson('Newman');
  const newman = new CordialPerson('Jerry');
  
  jerry.speak();
  newman.speak();

// Principle 4

// code example for Explicit Binding

function Person(obj){
    this.name = obj.name;
    this.age = obj.age;
    this.speak = function(){
        console.log(`This new binding`, this);
        return `Hello, my name is ${this.name}, and I am ${this.age} years old`;
    }
}

const ryan = new Person({name: 'Ryan', age: 32});
const haynes = new Person({name: 'Haynes', age: `8months`});

ryan.speak.call(haynes);
ryan.speak.apply(haynes);

ryan.speak();
haynes.speak();

