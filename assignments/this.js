/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding: In this context this refers to everything within Javascript.
* 2. Implicit Binding: In this context this refers to the object to the left of the dot in which the instantiation is being made.
* 3. New Binding: Here, this refers to the attributes that are being pointed towards the new object that has been created.
* 4. Explicit Binding: This, here, refers to something being plugged into a function but is being called somewhere else.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function someWhere(place) {
    console.log(this);
    return place;
}
someWhere('argentina');

// Principle 2

// code example for Implicit Binding
const starWars = {
    name:'Obi-Wan',
    age:42,
    lightSaber:'Blue',
    speaks: function () {
        return `My light saber is ${this.lightSaber}`;
    }
};
console.log(starWars.speaks());

// Principle 3

// code example for New Binding
function Jedi(att) {
    this.name = att.name;
    this.saberColor = att.saberColor;
    this.speak = function () {
        return `I am Master ${this.name} and the color of my light saber is ${this.saberColor}.`;
    }
};
const jedi1 = new Jedi({name:'luke', saberColor:'light blue'});
console.log(jedi1.speak());

// Principle 4

// code example for Explicit Binding
function hello() {
    console,log(this.name);
}
let alien = {
    name:'jar-jar'
};
hello.call(alien);