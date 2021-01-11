// function createNewPerson(name) {
//   const obj = {};
//   obj.name = name;
//   obj.greeting = function () {
//     alert('Hi! I\'m ' + obj.name + '.');
//   };
//   return obj;
// }

// const john = createNewPerson("John");
// john.greeting();

// function Person(name) {
//     this.name = name;
//     this.greeting = function () {
//         alert('Hi! I\'m ' + this.name + '.');
//     };
// }

// let p1 = new Person("hello");
// let p2 = new Person("world");

// p1.greeting();
// p2.greeting();



// javascript oop with class keyword
class Animals {
    constructor(name, specie) {
        this.name = name;
        this.specie = specie;
    }
    sing() {
        return `${this.name} can sing`;
    }
    dance() {
        return `${this.name} can dance`;
    }
}
let bingo = new Animals("Bingo", "Hairy");
console.log(bingo);

// it is actually the syntatic sugar over the existing prototyping technique
function Animals(name, specie) {
    this.name = name;
    this.specie = specie;
}
Animals.prototype.sing = function () {
    return `${this.name} can sing`;
}
Animals.prototype.dance = function () {
    return `${this.name} can dance`;
}
let Bingo = new Animals("Bingo", "Hairy");


// subclassing
class Animals {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sing() {
        return `${this.name} can sing`;
    }
    dance() {
        return `${this.name} can dance`;
    }
}
class Cats extends Animals {
    constructor(name, age, whiskerColor) {
        super(name, age);
        this.whiskerColor = whiskerColor;
    }
    whiskers() {
        return `I have ${this.whiskerColor} whiskers`;
    }
}
let clara = new Cats("Clara", 33, "indigo");


console.log(clara.sing());
console.log(clara.whiskers());
// Expected Output
// "Clara can sing"
// "I have indigo whiskers"