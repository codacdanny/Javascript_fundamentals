"use strict";

// function Student(firstName, LastName, Job, yearBirth) {
//     this.firstName = firstName;
//     this.LastName = LastName;
//     this.Job = Job;
//     this.yearBirth = yearBirth;

// }

// const john = new Student;

// differentiate between an athletic and a driver.

// /****
//  primitive vs objects
//   */

//   let a = "ade"
//   let b = a

//   a = "bola"

//   console.log(a)
//   console.log(b)

//   let codetent = {
//       a: "alex",
//   }

//   let codetent2 = codetent
//   codetent.a = "daniel"

//   console.log(codetent.a)
//   console.log(codetent2.a)

// FUNCTIONS AND A FIRST CLASS FUNCTION.(ie FUNCTIONS ACCEPTING FUNCTIONS)
// let years = [1992, 1989, 1947, 1895, 2001];
// function bigCalculator(arr, fn) {
//   let arrRes = [];
//   for (let i = 0; i < arr.length; i++) {
//     arrRes.push(fn(arr[i]));
//   }
//   return arrRes;
// }

// function calculateAge(arrYears) {
//   return new Date().getFullYear() - arrYears;
// }
// console.log(bigCalculator(years, calculateAge));

// function retirementAge(age) {
//   if (age > 60) {
//     console.log(`he is retired`);
//   } else {
//     console.log(`he is not retired`);
//   }
// }

// let ages = bigCalculator(years, calculateAge);
// bigCalculator(ages, retirementAge);

//FUNCTIONS RETURNING FUNCTIONS

// function jobDetector(job) {
//     if (job === 'teacher'){
//         return function (name) {
//             console.log(`I am ${name} and I am a ${job}.`);
//         };

//     } else if (job === 'driver'){
//         return function (name){
//             console.log(`I am ${name} and I am a ${job}.`);
//         };
//     } else if (job === 'accountant') {
//         return function (name) {
//             console.log(`I am ${name} and i am a ${job}.`);
//         };
//     } else {
//         console.log(`sapa dey hold me.`);
//     }
// }

// let driver = jobDetector('driver');
// driver('Ade');
// let john ={
//     firstName: 'johnny',
//     LastName: 'ade',
//     yearBirth: 1997,
//     job: 'teacher',
//     whoAmi: function (gender, timeOfDay) {
//         if (gender === 'boy') {
//             console.log(`I am a ${gender}, i am saying ${timeOfDay}`);
//         } else if (gender === 'girl'){
//             console.log(`i am a ${gender}, i am saying ${timeOfDay}`);
//         } else {
//             console.log(`i don't know who you are.`)
//         }
//     },
// };

// john.whoAmi("boy", "morning");

// let mary;

// let John = {
//   firstName: "Johnny",
//   mass: 70,
//   height: 1.6,

//   calcBMI: function () {
//     johnbmi = this.mass / (this.height * 2);
//     return johnbmi;
//   },
// };

// let Mark = {
//   firstName: "Marky",
//   mass: 76,
//   height: 1.8,
//   calcBMI: function () {
//     markbmi = this.mass / (this.height * 2);
//     return markbmi;
//   },
// };

// John.calcBMI();
// Mark.calcBMI();
// if (johnbmi > markbmi) {
//   console.log(`mark is overweight`);
// } else if (johnbmi > markbmi) {
//   console.log(`john is way too big`);
// } else {
//   console.log(`they are way too big`);
// }

// var john = {
//   fullName: "John Smith",
//   mass: 83,
//   height: 1.84,
//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   },
// };

// var mark = {
//   fullName: "Mark Flav",
//   mass: 90,
//   height: 1.6,
//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   },
// };
// calculateAge(2001);
// function calculateAge(year) {
//   console.log(2016 - year);
//   console.log(this);
//}

// let john = {
//   name: "john",
//   yearOfBirth: 1990,
//   calculateAge: function () {
//     console.log(this);
//     console.log(2014 - this.yearOfBirth);

//     //     function innerFunction() {
//     //       console.log(this);
//     //     }
//     //     innerFunction();
//   },
// };

// john.calculateAge();

// let mike = {
//   name: "mike",
//   yearOfBirth: 1987,
// };

// mike.calculateAge = john.calculateAge;
// mike.calculateAge();

//javascript reloaded

// var firstName = "John";
// var age = 28;
// console.log(firstName + " " + age);

// let cow = true;
// if (cow == false) {
//   console.log("nothing");
// } else {
//   console.log("something");
// }

// let firstName = "John";
// let age = 19;
// if (age <= 13) {
//   console.log(`john is a boy`);
// } else if (age >= 16 && age < 20) {
//   console.log(`john is a teen`);
// } else {
//   console.log(`john is a youth`);
// }

// let firstName = "John";
// let age = 7;
// age >= 18
//   ? console.log(firstName + " drinks beer")
//   : console.log(firstName + " drinks juice");

// let drink = age <= 18 ? " drinks juice" : " drinks beer";

// console.log(drink);

/////// SWITCH STATEMENT
// let job = "chef";

// switch (job) {
//   case "baker":
//   case "chef":
//     console.log(` oluwa bakes`);
//     break;
//   case "painter":
//     console.log(`he paints`);
//     break;
//   default:
//     console.log(`he is jobless or does something else`);
// }

// switch (true) {
//   case age < 13:
//     console.log(`a boy`);
//     break;
//   case age > 13 && age <= 20:
//     console.log(`a teen`);
//     break;
//   case age > 20 && age < 30:
//     console.log(`young man`);
//     break;
//   default:
//     console.log(` he is old af`);
// }

//CODING CHALLENGE

// let johnave, mikeave, maryave;

// johnave = (89 + 180 + 103) / 3;
// mikeave = (116 + 94 + 123) / 3;
// maryave = (97 + 134 + 105) / 3;

// if (johnave > mikeave && johnave > maryave) {
//   console.log(`john is the winner with an average of ` + johnave);
// } else if (mikeave > johnave && mikeave > maryave) {
//   console.log(`mike won with an average of ` + mikeave);
//   console.log(`mary won with an average of ` + maryave);
// } else {
//   console.log(`there is a draw somewhere`);
// }

/* FUNCTIONS */

// function calcage(birthYear) {
//   return 2021 - birthYear;
// }

// let ageJohn = calcage(2000);
// let ageJune = calcage(1991);
// let ageJames = calcage(2001);

// console.log(ageJohn, ageJune, ageJames);

// function yearsUntillRetirement(year, firstName) {
//   let age = calcage(year);
//   let retirement = 70 - age;
//   retirement > 0
//     ? console.log(firstName + " retires in " + age + " years time")
//     : console.log(firstName + "  is already retired");
// }

// yearsUntillRetirement(1990, "James");
// yearsUntillRetirement(1918, "Johnny");

/* FUNCTION STATEMENT AND EXPRESSIONS */

// function statement
// function whatDoYouDo(param){}

//function expression
/*let whatDoYouDo = function (job, firstName) {
  switch (job) {
    case "teacher":
      return firstName + " teaches";
    case "banker":
      return firstName + " works in a bank";
    case "designer":
      return firstName + " designs beautiful websites";

    default:
      return firstName + " does something else";
  }
};
console.log(whatDoYouDo("teacher", "John")); // we are logging directly to the console because we don't want to save the return results to variable

console.log(whatDoYouDo("banker", "james"));
console.log(whatDoYouDo("designer", "kalu"));*/

/* ARRAYS */
/*
let names = ["John", "Mark", "Jane"];
let years = new Array(1990, 1999, 1945);

//arrays are zero based.  how to access an array?

console.log(names[0]);
console.log(names.length);

//MUTATION OF DATA IN AN ARRAY

names[4] = "ben";
console.log(names);
console.log(names.length);
//ARRAY CAN HOLD DIFFERENT DATA TYPES!!!!!

let john = ["John", 1993, "teacher", false];
console.log(john);

//ARRAY METHODS

john.push("blue"); //this adds element at the end of the array
john.unshift("Dr"); // this adds element at the begining of the array
console.log(john);

john.pop(); // this removes the last element in the array
console.log(john);
john.shift(); // this removes the first element in the array
console.log(john);

console.log(john.indexOf("Dr")); // this tells us the position of the element in the array. if the array is absent it will give us -1.
console.log(john.indexOf("teacher"));
*/
/*
let percentage;
function tipcalc(bill) {
  if (bill < 50) {
    percentage = 0.2;
  } else if (bill > 50 && bill < 200) {
    percentage = 0.15;
  } else {
    percentage = 0.1;
  }
  return bill * percentage;
}

let bills = [124, 48, 268];
let tips = [tipcalc(bills[0]), tipcalc(bills[1]), tipcalc(bills[2])];
console.log(tips);
finaltip = [
  tipcalc(bills[0]) + bills[0],
  tipcalc(bills[1]) + bills[1],
  tipcalc(bills[2]) + bills[2],
];

console.log(finaltip);*/

//OBJECTS AND PROPERTIES
/*
let John = {
  firstName: "John",
  lastName: "Smith",
  birthYear: 1990,
  family: ["Jane", "Mark", "Uche", "Emily"], // you can put an array in an object
  job: "designer",
  isMarried: false,
};
console.log(John.birthYear); // we access the details by using the dot notation like in the example on this line

console.log(John["firstName"]); // this is another way of acessing details in the object.

// we can also assign the values to a variable like in the example below

let u = "job"; // this job is one of the properties in John
console.log(John[u]); // notice that we can't access this by the dot notation

// MUTATION

John.job = "designer";
John["isMarried"] = true;
console.log(John);

// new object syntax  this another way of creating objects. you can either add the 'new' or not. if you want.

let jane = Object();

jane.name = "cow";
jane.add = "aba";

console.log(jane);

console.log(jane.add);
*/

//OBJECTS AND METHODS

//objects acan hold functions, these functions are now called methods

// let James = Object();
// James.name = "chima";
// James.birthyear = 1998;
// James.status = "single";
// James.calcage = function () {
//   this.age = 2021 - this.birthyear;
// };

// James.calcage();
// console.log(James); // don't forget to call the function properly with the ().

// let john = Object();
// john.name = "John Odumodu";
// john.mass = 78;
// john.height = 1.98;
// john.calcBMI = function () {
//   this.bmi = this.mass / (this.height * this.height);
//   return this.bmi;
// };
// john.calcBMI();

// console.log(john.calcBMI());

// let mike = Object();

// mike.name2 = "mike Odumodu";
// mike.mass2 = 80;
// mike.height2 = 1.58;
// mike.calcBMI2 = function () {
//   this.bmi2 = this.mass2 / (this.height2 * this.height2);
//   return this.bmi2;
// };
// mike.calcBMI2();

// console.log(mike.bmi2);

// john.bmi > mike.bmi2
//   ? console.log("john is heavy af")
//   : console.log(`mike is heavy `);

//LOOPS!!!!

//for loop. this has 3 parts. the initial value, the maximum value you want to attain or the condition you want, then finally what should be added or subtracted or what should be done after the condition allows an operation.

// for (let i = 0; i <= 100; i++) {
//   console.log(i);
// }

// looping through an array

// let john = ["John", "Smith", 1990, "designer", false];
// for (let i = 0; i < john.length; i++) {
//   console.log(john[i]);
// }
// //WHILE LOOP
// let i = 0;
// while (i < john.length) {
//   console.log(john[i]);
//   i++;
//}

/* the while loop only has one condition. the after condition should be entered inside the code block.  note that you should write the variable outside the code block in the above example */

//continue and break statement

// we use the break statement to break out of the loop

// we use the continue to quit the iteration of a loop and continue in another iteration

// let john = ["John", "Smith", 1990, "designer", false, "blue"];
// for (let i = 0; i < john.length; i++) {
//   if (typeof john[i] !== "string") continue; // the curly braces are not necessary
//   console.log(john[i]);
//}

// for (let i = 0; i < john.length; i++) {
//   if (typeof john[i] !== "string") break; // the curly braces are not necessary
//   console.log(john[i]);
// }

// // looping backwards
// for (let i = john.length - 1; i >= 0; i--) {
//   console.log(john[i]);
// }

//coding challenge
//bill = [124, 48, 268, 180, 42];

// let john = Object();
// john.bills = [124, 48, 268, 180, 42];

// john.billcalc = function () {
//   this.tips = [];
//   this.finalTips = [];

//   for (let i = 0; i < this.bills.length; i++) {
//     let percentage;
//     let bill = this.bills[i];
//     if (bill < 50) {
//       percentage = 0.2;
//     } else if (bill >= 50 && bill <= 200) {
//       percentage = 0.15;
//     } else {
//       percentage = 0.1;
//     }

//     this.tips[i] = bill * percentage;
//     this.finalTips[i] = bill + bill * percentage;
//   }
// };
// john.billcalc();
// console.log(john);

// let mike = Object();
// mike.bills = [77, 5, 110, 45];

// mike.billcalc = function () {
//   this.tips = [];
//   this.finalTips = [];

//   for (let i = 0; i < this.bills.length; i++) {
//     let percentage;
//     let bill = this.bills[i];
//     if (bill < 100) {
//       percentage = 0.2;
//     } else if (bill >= 100 && bill <= 300) {
//       percentage = 0.1;
//     } else {
//       percentage = 0.25;
//     }

//     this.tips[i] = bill * percentage;
//     this.finalTips[i] = bill + bill * percentage;
//   }
// };
// mike.billcalc();

// function calcave(tips) {
//   let sum = 0;
//   for (let i = 0; i < tips.length; i++) {
//     sum = sum + tips[i];
//   }
//   return sum / tips.length;
// }

// john.billcalc();
// mike.billcalc();
// console.log(john, mike);

// john.average = calcave(john.tips);
// mike.average = calcave(mike.tips);

// console.log(john, mike);

// if (john.average > mike.average) {
//   console.log(`john tips better than mike`);
// } else {
//   console.log(`mike tips  way better than john`);
// }

//FUNCTION CONSTRUCTOR

// const john = new Object();

// john.name = "John";
// john.yearOfBirth = 1990;
// john.job = "teacher";

//using the function constructor to create object

// let Person = function (name, yearOfBirth, job) {
//   // we use the this variable to attach the variables so that the other objects can inherit it with their names

//   this.name = name;
//   this.yearOfBirth = yearOfBirth;
//   this.job = job;
//   /*this.calcAge = function () {
//     console.log(2022 - this.yearOfBirth);
//   };*/
// }; //note that we use initial capitals to name function constructor. the parameters for constructors will be the variables that we want to set in our object
// Person.prototype.calcAge = function () {
//   console.log(2022 - this.yearOfBirth);
// }; // this replaces the this.calcage fxn we wrote earlier, but the code works bcause of the prototype chian. john and every other object inherits the calcage fxn from the person prototype

// Person.prototype.LastName = "Smith"; // they'll all inherit this property. this means that any property or method that we want these objects to inherit should be directly written into the person prototype
// let john = new Person("John", 1990, "teacher"); // the arguments are the values of the variables we defined in the person function.  this is called instanciation, because these object is an instance of the person object.  When we use 'new' operator, it creates a new empty object, then the constructor fxn (person) with arguments as afunction, this creates a new execution context. now because of the new operator the 'this' variable does not point to the global context rather it points to the new object that has been created. now this automatically points to the John variable

// john.calcAge(); // this works because john inherits the method from the PERSON Constructor
// let jane = new Person("Jane", 1969, "designer");
// let mark = new Person("Mark", 2003, "retired");
// console.log(john.LastName);
// console.log(jane.LastName);
// console.log(mark.LastName);

/* MY OWN TEST*/

/*
let Qerson = function (age, height, maritalStatus, namey) {
  this.age = age;
  this.height = height;
  this.maritalStatus = maritalStatus;
  this.namey = namey;
};

Qerson.prototype.ageToMarry = function () {
  if (this.age >= 25) {
    console.log(`${this.namey} is fit to marry`);
  } else {
    console.log(`${this.namey} is not fit to marry`);
  }
};
let jude = new Qerson(22, 1.95, "single", "Jude");
let judith = new Qerson(32, 1.98, "married", "Judith");
let marky = new Qerson(25, 1.75, "searching", "Marky");
jude.ageToMarry();
judith.ageToMarry();
marky.ageToMarry();
*/

/* object.create method*/

// let personProto = Object();
// personProto.calcAge = function () {
//   console.log(2022 - this.yearOfBirth);
// };
// let john = Object.create(personProto);
// john.name = "john";
// john.yearOfBirth = 2001;
// john.job = "killer";

// //or you can do this

// let jane = Object.create(personProto, {
//   name: { value: "Jane" },
//   yearOfBirth: { value: 1969 },
//   job: { value: "designer" },
// });

// let a = 23;
// let b = a;
// a = 46;
// console.log(a, b);

// obj1 = Object();
// obj1.name = "uju";
// obj1.age = 23;

// let obj2 = obj1;

// obj1.age = 30;

// console.log(obj1.age, obj2.age);

// PASSING FUNCTIONS AS ARGUMENTS IN ANOTHER FUNCTION

// let years = [1990, 2003, 2006, 1997, 2003];

// function arrayCalc(arr, fn) {
//   //fn is our callback fxn
//   let arrRes = [];
//   for (let i = 0; i < arr.length; i++) {
//     arrRes.push(fn(arr[i]));
//   }
//   return arrRes;
// }

// function calcAge(el) {
//   return 2022 - el;
// }
// // note that the (el) argument passed into the calc back functions is the argument (arr[i]) in the arrRes.push(fn(el)). so you should understand that the argument el is the years array which is passed as an argument to the callback fn that lets the callback fxn do the calculation
// function isFullAge(el) {
//   return el >= 18;
// }
// function maxHeartRate(el) {
//   if (el >= 18 && el <= 81) {
//     return Math.round(206.9 - 0.67 * el); //formula for her rates according to ages
//   } else {
//     return -1;
//   }
// }
// let ages = arrayCalc(years, calcAge); // note that we are not calling calcage, but we are passing it as an argument to arrayCalc, then arrayCalc will now call the calcage fxn when needed
// let fullAges = arrayCalc(ages, isFullAge);
// let rates = arrayCalc(ages, maxHeartRate);
// console.log(fullAges);
// console.log(ages);
// console.log(rates);

// // CREATING CUSTOM ARRAY
// Array.prototype.preshy = rat;
// function rat() {
//   return this.map((x) => x * 3);
// }
// console.log([2, 3, 4].preshy());

// FUNCTION RETURNING FUNCTIONS

// function interview(job) {
//   if (job === "designer") {
//     return function (name) {
//       console.log(`${name}, can you please ecxplain what UX means?`);
//     };
//   } else if (job === "teacher") {
//     return function (name) {
//       console.log(`${name} can you please tell us the subjects you can teach?`);
//     };
//   } else {
//     return function (name) {
//       console.log(`hello ${name}, what do you do?`);
//     };
//   }
// }

// var teacherQuest = interview("teacher"); // this will be a fxn returned from the interview with teacher
// // the  variable now becomes the function that is said to br returned

// teacherQuest("Jane"); // you can now pss in the name rgument since the function is now stored in the 'techer Quest ' Variable

// var designer = interview("designer");

// designer("Judith");

// // we can also call the returned fxn right away

// interview("dancer")("Dan"); // now this is possible becuse JS interpretes this functionsfrom left to right, so first it calls the main function which is the job the it calls the returning function which is thr function with the name argument

// THIS IS AN IMMEDIATELY INVOED FUNCTION

/*
function game(params) {
  let score = Math.random() * 10;
  console.log(score >= 5);
}
game(); //instead of this we have this

(function () {
  let score = Math.random() * 10;
  console.log(score >= 5);
})();

// it can also have parameters

(function (milk) {
  let score = Math.random() * 10;
  console.log(score >= 5 + milk);
})(5);*/
/*
function retirement(retirementAge) {
  let a = `and finally dies`;
  return function (yearOfBirth) {
    let age = 2016 - yearOfBirth;
    // return age;
    console.log(retirementAge - age + ` years left untill retirement. ` + a);
  };
}

let retirementUS = retirement(66)(1990);
let retirementAUS = retirement(70)(1998);

//console.log(retirementUS);

function make(multiplier) {
  let sqr = multiplier * multiplier;
  return function (val) {
    let newVal = val * sqr;
    return newVal;
  };
}

let setSqr = make(2)(3); //this works too
console.log(setSqr);
// let setSqr = make(2);
// let newValue = setSqr(3);
// // console.log(newValue);*/

// //ARRAY MANIPULATION
// const arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
//   [[10, 11, 12], 13, 14],
// ];

// // console.log(arr[3]);
// // console.log(arr[3][0]);
// // console.log(arr[3][0][1]);
// console.log(arr[3][0][1]); //each bracket is for each array, the next bracket goes a level deeper into the array,adn so does the next bracket. note that this is done without spacing
// let cow = arr.pop();
// console.log(cow);
// console.log(arr);

// const outerWear = "T-Shirt";

// function myOutfit() {
//   // Only change code below this line
//   let outerWear = "sweater";
//   // Only change code above this line
//   return outerWear;
// }

// myOutfit();
//console.log(outerWear);

// console.log(0 != true);

// let count = 0;

// function cc(card) {
//   // Only change code below this line
//   if (count > 0) {
//     return count + " Bet";
//   } else {
//     return count + " Hold";
//   }

//   // Only change code above this line
// }

// cc(2);
// cc(3);
// cc(7);
// cc("K");
// cc("A");

/* CODING CHALLENGE FROM UDEMY
You are given an object literal representing a part of your musical album collection. Each album has a unique id number as its key and several other properties. Not all albums have complete information.

You start with an updateRecords function that takes an object literal, records, containing the musical album collection, an id, a prop (like artist or tracks), and a value. Complete the function using the rules below to modify the object passed to the function.

Your function must always return the entire record collection object.
If prop isn't tracks and value isn't an empty string, update or set that album's prop to value.
If prop is tracks but the album doesn't have a tracks property, create an empty array and add value to it.
If prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks array.
If value is an empty string, delete the given prop property from the album.*/

/*
2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  if (prop !== 'tracks' && value !== "") {
    records[id][prop] = value;
  } else if (prop === "tracks" && records[id].hasOwnProperty("tracks") === false) {
    records[id][prop] = [value];
  } else if (prop === "tracks" && value !== "") {
    records[id][prop].push(value);
  } else if (value === "") {
    delete records[id][prop];
  }
  return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');*/

// WHILE LOOP
// const ourArray = [];
// let i = 0;

// while (i < 5) {
//   ourArray.push(i);
//   i++;
// }
// console.log(ourArray);

/* If you have a multi-dimensional array, you can use the same logic as 
the prior waypoint to loop through both the array and any sub-arrays. Here is an example
*/
// const arr = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];

// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     console.log(arr[i][j]);
//   }
// }

// const arrObj = [
//   {
//     todo: `Buy Bread`,
//     isDone: true,
//   },
// //   {
// //     todo: `Buy egg`,
// //     isDone: false,
// //   },
// //   {
// //     todo: `Buy snacks`,
// //     isDone: undefined,
// //   },
// // ];

// // const obj = arrObj.filter((todos) => todos.isDone === false); // we see that todos is just an argument we use to get acces to the elements of the object
// // console.log(obj);

// const user = new Object();
// user.name = "Ororo";
// user.age = 21;
// user.height = 1.9;
// user.status = "online";

// console.log(user);

// const { name, age, height, status } = user;

// console.log(user.status);

// /* altering object names*/

// // BEFORE
// /*
// const LOCAL_FORECAST = {
//   yesterday: { low: 61, high: 75 },
//   today: { low: 64, high: 77 },
//   tomorrow: { low: 68, high: 80 },
// };

// // Only change code below this line

// const lowToday = LOCAL_FORECAST.today.low;
// const highToday = LOCAL_FORECAST.today.high;
// */
// //AFTER
// /*
// const LOCAL_FORECAST = {
//   yesterday: { low: 61, high: 75 },
//   today: { low: 64, high: 77 },
//   tomorrow: { low: 68, high: 80 },
// };

// // Only change code below this line

// const {
//   today: { low: lowToday, high: highToday },
// } = LOCAL_FORECAST;*/

// /*
// ES6 makes destructuring arrays as easy as destructuring objects.

// One key difference between the spread operator and array destructuring is that the spread operator unpacks all contents of an array into a comma-separated list. Consequently, you cannot pick or choose which elements you want to assign to variables.

// Destructuring an array lets us do exactly that:

// const [a, b] = [1, 2, 3, 4, 5, 6];
// console.log(a, b);
// The console will display the values of a and b as 1, 2.

// The variable a is assigned the first value of the array, and b is assigned the second value of the array. We can also access the value at any index in an array with destructuring by using commas to reach the desired index:

// const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
// console.log(a, b, c);
// The console will display the values of a, b, and c as 1, 2, 5.*/

// /*GETTERS AND SETTERS IN ES6*/
// // Only change code below this line
// class Thermostat {
//   constructor(fahrenheit) {
//     this.fahrenheit = fahrenheit;
//   }
//   get temperature() {
//     return (5 / 9) * (this.fahrenheit - 32);
//   }

//   set temperature(celsius) {
//     this.fahrenheit = (celsius * 9.0) / (5 + 32);
//   }
// }
// // Only change code above this line

// const thermos = new Thermostat(76); // Setting in Fahrenheit scale
// let temp = thermos.temperature; // 24.44 in Celsius
// thermos.temperature = 26;
// temp = thermos.temperature;
// console.log(thermos);

// /**
//  Regular expressions are used in programming languages to match parts of strings. You create patterns to help you do that matching.

// If you want to find the word the in the string The dog chased the cat, you could use the following regular expression: /the/. Notice that quote marks are not required within the regular expression.

// JavaScript has multiple ways to use regexes. One way to test a regex is using the .test() method. The .test() method takes the regex, applies it to a string (which is placed inside the parentheses), and returns true or false if your pattern finds something or not.
// */
// let testStr = "freeCodeCamp";
// let testRegex = /Code/;
// console.log(testRegex.test(testStr));
// //The test method here returns true.

// let twinkleStar = "Twinkle, twinkle, little star";
// let starRegex = /Twinkle/g; // Change this line
// let result = twinkleStar.match(starRegex); // Change this line
// console.log(result);

// // .repeat method
// let A100 = "h" + "a".repeat(100) + "h";

// console.log(A100);

// /* RVERSING WORDS IN JS*/

// function reverseString(str) {
//   let reversedStr = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversedStr += str[i];
//   }
//   return reversedStr;
// }
// console.log(reverseString("MIAMIA"));

// // FINDING FACTORIAL

// function factorialize(num) {
//   if (num !== 0) {
//     for (let i = num - 1; i > 0; i--) {
//       num *= i;
//     }
//   } else {
//     return (num = 1);
//   }

//   return num;
// }

// console.log(factorialize(-1));

// // HOW TO FIND THE STRING WITh THE HIGHEST LENGTH

// function findLongestWordLength(str) {
//   let words = str.split(" "); // the split function divides the strings into an array in smaller parts separated by the
//   // space / ' '/ empty string. so afte each space it collects data and pushes it into an array
//   let maxlength = 0;
//   for (let i = 0; i < words.length; i++) {
//     if (words[i].length > maxlength) {
//       maxlength = words[i].length;
//     }
//   }
//   return maxlength;
// }

// console.log(
//   findLongestWordLength("The quick brown fox jumpeddd over the lazy dog")
// );

// /*Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

// */

// // function largestOfFour(arr) {
// //   let result = [];
// //   for (let i = 0; i < arr.length; i++) {
// //     let largestN = arr[i][0];
// //     for (let j = 0; j < arr[i].length; j++) {
// //       if (arr[i][j] > largestN) largestN = arr[i][j];
// //     }
// //     result[i] = largestN;
// //   }
// //   return result;
// // }

// // //how to  confirm what a word ends with
// // function confirmEnding(str, target) {
// //   return str.slice(-target.length) === target;
// // }

// // confirmEnding("Bastian", "n");

// // function Dog(name) {
// //   this.name = name;
// // }

// // Dog.prototype.numLegs = 4;

// // // Only change code above this line
// // let beagle = new Dog("Snoopy");
// // console.log(beagle.numLegs);

// // // the code below is a way a super type can inherit the prototype of a more super type
// // Dog.prototype = Object.create(Animal.prototype);

// // IMMEDIATELY INVOKED FUNCTIONS IIFE IN ES5 THIS CREATES A CLOSURE WITHIN THE CODE SO THAT THE VARIABLES CANNOT BE ACCESSED FROM OUTSIDE THE BLOCK

// let funModule = (function () {
//   return {
//     isCuteMixin: function (obj) {
//       obj.isCute = function () {
//         return true;
//       };
//     },
//     singMixin: function (obj) {
//       obj.sing = function () {
//         console.log("Singing to an awesome tune");
//       };
//     },
//   };
// })();

// //IIFE IN ES6

// // let funModule = (() => {
// //   return {
// //     isCuteMixin: (obj) => {
// //       obj.isCute = () => {
// //         true;
// //       };
// //     },
// //     singMixin: (obj) => {
// //       obj.sing = () => {
// //         console.log("Singing to an awesome tune");
// //       };
// //     },
// //   };
// // })();

// // FUNCTION GETTING FUNCTIONS AS ARGUMENTS

// // Function that returns a string representing a cup of green tea
// const prepareGreenTea = () => "greenTea";

// // Function that returns a string representing a cup of black tea
// const prepareBlackTea = () => "blackTea";

// /*
// Given a function (representing the tea type) and number of cups needed, the
// following function returns an array of strings (each representing a cup of
// a specific type of tea).
// */
// const getTea = (prepareTea, numOfCups) => {
//   const teaCups = [];

//   for (let cups = 1; cups <= numOfCups; cups += 1) {
//     const teaCup = prepareTea();
//     teaCups.push(teaCup);
//   }
//   return teaCups;
// };

// // Only change code below this line
// const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
// const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);
// // Only change code above this line

// console.log(tea4GreenTeamFCC, tea4BlackTeamFCC);

// // HOW TO USE .map TO READ VALUES FROM AN ARRAY

// const watchList = [
//   {
//     Title: "Inception",
//     Year: "2010",
//     Rated: "PG-13",
//     Released: "16 Jul 2010",
//     Runtime: "148 min",
//     Genre: "Action, Adventure, Crime",
//     Director: "Christopher Nolan",
//     Writer: "Christopher Nolan",
//     Actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
//     Plot: "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
//     Language: "English, Japanese, French",
//     Country: "USA, UK",
//     Awards: "Won 4 Oscars. Another 143 wins & 198 nominations.",
//     Poster:
//       "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
//     Metascore: "74",
//     imdbRating: "8.8",
//     imdbVotes: "1,446,708",
//     imdbID: "tt1375666",
//     Type: "movie",
//     Response: "True",
//   },
//   {
//     Title: "Interstellar",
//     Year: "2014",
//     Rated: "PG-13",
//     Released: "07 Nov 2014",
//     Runtime: "169 min",
//     Genre: "Adventure, Drama, Sci-Fi",
//     Director: "Christopher Nolan",
//     Writer: "Jonathan Nolan, Christopher Nolan",
//     Actors: "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
//     Plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//     Language: "English",
//     Country: "USA, UK",
//     Awards: "Won 1 Oscar. Another 39 wins & 132 nominations.",
//     Poster:
//       "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
//     Metascore: "74",
//     imdbRating: "8.6",
//     imdbVotes: "910,366",
//     imdbID: "tt0816692",
//     Type: "movie",
//     Response: "True",
//   },
//   {
//     Title: "The Dark Knight",
//     Year: "2008",
//     Rated: "PG-13",
//     Released: "18 Jul 2008",
//     Runtime: "152 min",
//     Genre: "Action, Adventure, Crime",
//     Director: "Christopher Nolan",
//     Writer:
//       "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
//     Actors: "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
//     Plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
//     Language: "English, Mandarin",
//     Country: "USA, UK",
//     Awards: "Won 2 Oscars. Another 146 wins & 142 nominations.",
//     Poster:
//       "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
//     Metascore: "82",
//     imdbRating: "9.0",
//     imdbVotes: "1,652,832",
//     imdbID: "tt0468569",
//     Type: "movie",
//     Response: "True",
//   },
//   {
//     Title: "Batman Begins",
//     Year: "2005",
//     Rated: "PG-13",
//     Released: "15 Jun 2005",
//     Runtime: "140 min",
//     Genre: "Action, Adventure",
//     Director: "Christopher Nolan",
//     Writer:
//       "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
//     Actors: "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
//     Plot: "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
//     Language: "English, Urdu, Mandarin",
//     Country: "USA, UK",
//     Awards: "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
//     Poster:
//       "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
//     Metascore: "70",
//     imdbRating: "8.3",
//     imdbVotes: "972,584",
//     imdbID: "tt0372784",
//     Type: "movie",
//     Response: "True",
//   },
//   {
//     Title: "Avatar",
//     Year: "2009",
//     Rated: "PG-13",
//     Released: "18 Dec 2009",
//     Runtime: "162 min",
//     Genre: "Action, Adventure, Fantasy",
//     Director: "James Cameron",
//     Writer: "James Cameron",
//     Actors: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
//     Plot: "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
//     Language: "English, Spanish",
//     Country: "USA, UK",
//     Awards: "Won 3 Oscars. Another 80 wins & 121 nominations.",
//     Poster:
//       "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
//     Metascore: "83",
//     imdbRating: "7.9",
//     imdbVotes: "876,575",
//     imdbID: "tt0499549",
//     Type: "movie",
//     Response: "True",
//   },
// ];

// const ratings = watchList.map((item) => ({
//   title: item["Title"],
//   rating: item["imdbRating"],
// }));

// Only change code above this line

// const users = [
//   { name: "John", age: 34 },
//   { name: "Amy", age: 20 },
//   { name: "camperCat", age: 10 },
// ];

// function rat(x, i) {
//   if (x.name == "John") {
//     return true;
//   }
//   return false;
// }

// // combining the filter and map fxn
// const usersUnder30 = users.filter((y) => y.name == "Amy").map((x) => x.age * 2);
// console.log(usersUnder30);

// watchList
//   .map(({ Title: title, imdbRating: rating }) => ({ title, rating }))
//   .filter(({ rating }) => rating > 8);

// const arr = ["Cat", "Dog", "Tiger", "Zebra"];
// const newArray = arr.slice(1, 3);
// //newArray would have the value ["Dog", "Tiger"].

// const watchList = [
//   {
//     Title: "Inception",
//     Year: "2010",
//     Rated: "PG-13",
//     Released: "16 Jul 2010",
//     Runtime: "148 min",
//     Genre: "Action, Adventure, Crime",
//     Director: "Christopher Nolan",
//     Writer: "Christopher Nolan",
//     Actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
//     Plot: "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
//     Language: "English, Japanese, French",
//     Country: "USA, UK",
//     Awards: "Won 4 Oscars. Another 143 wins & 198 nominations.",
//     Poster:
//       "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
//     Metascore: "74",
//     imdbRating: "8.8",
//     imdbVotes: "1,446,708",
//     imdbID: "tt1375666",
//     Type: "movie",
//     Response: "True",
//   },
//   {
//     Title: "Interstellar",
//     Year: "2014",
//     Rated: "PG-13",
//     Released: "07 Nov 2014",
//     Runtime: "169 min",
//     Genre: "Adventure, Drama, Sci-Fi",
//     Director: "Christopher Nolan",
//     Writer: "Jonathan Nolan, Christopher Nolan",
//     Actors: "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
//     Plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//     Language: "English",
//     Country: "USA, UK",
//     Awards: "Won 1 Oscar. Another 39 wins & 132 nominations.",
//     Poster:
//       "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
//     Metascore: "74",
//     imdbRating: "8.6",
//     imdbVotes: "910,366",
//     imdbID: "tt0816692",
//     Type: "movie",
//     Response: "True",
//   },
//   {
//     Title: "The Dark Knight",
//     Year: "2008",
//     Rated: "PG-13",
//     Released: "18 Jul 2008",
//     Runtime: "152 min",
//     Genre: "Action, Adventure, Crime",
//     Director: "Christopher Nolan",
//     Writer:
//       "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
//     Actors: "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
//     Plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
//     Language: "English, Mandarin",
//     Country: "USA, UK",
//     Awards: "Won 2 Oscars. Another 146 wins & 142 nominations.",
//     Poster:
//       "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
//     Metascore: "82",
//     imdbRating: "9.0",
//     imdbVotes: "1,652,832",
//     imdbID: "tt0468569",
//     Type: "movie",
//     Response: "True",
//   },
//   {
//     Title: "Batman Begins",
//     Year: "2005",
//     Rated: "PG-13",
//     Released: "15 Jun 2005",
//     Runtime: "140 min",
//     Genre: "Action, Adventure",
//     Director: "Christopher Nolan",
//     Writer:
//       "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
//     Actors: "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
//     Plot: "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
//     Language: "English, Urdu, Mandarin",
//     Country: "USA, UK",
//     Awards: "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
//     Poster:
//       "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
//     Metascore: "70",
//     imdbRating: "8.3",
//     imdbVotes: "972,584",
//     imdbID: "tt0372784",
//     Type: "movie",
//     Response: "True",
//   },
//   {
//     Title: "Avatar",
//     Year: "2009",
//     Rated: "PG-13",
//     Released: "18 Dec 2009",
//     Runtime: "162 min",
//     Genre: "Action, Adventure, Fantasy",
//     Director: "James Cameron",
//     Writer: "James Cameron",
//     Actors: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
//     Plot: "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
//     Language: "English, Spanish",
//     Country: "USA, UK",
//     Awards: "Won 3 Oscars. Another 80 wins & 121 nominations.",
//     Poster:
//       "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
//     Metascore: "83",
//     imdbRating: "7.9",
//     imdbVotes: "876,575",
//     imdbID: "tt0499549",
//     Type: "movie",
//     Response: "True",
//   },
// ];

// function getRating(watchList) {
//   // Add your code below this line
//   const averageRating =
//     watchList
//       // Use filter to find films directed by Christopher Nolan
//       .filter((film) => film.Director === "Christopher Nolan")
//       // Use map to convert their ratings from strings to numbers
//       .map((film) => Number(film.imdbRating))
//       // Use reduce to add together their ratings
//       .reduce((sumOfRatings, rating) => sumOfRatings + rating) /
//     // Divide by the number of Nolan films to get the average rating
//     watchList.filter((film) => film.Director === "Christopher Nolan").length;
//   // Add your code above this line
//   return averageRating;
// }

// console.log(getRating(watchList));

// // here we are looping through the array to find positive integers and squaring them. we are using to methods to fine the square

// // My first method num*num
// const squareList = (arr) => {
//   // Only change code below this line

//   return arr
//     .filter((num) => num > 0 && num % parseInt(num) === 0)
//     .map((num) => num * num);
//   // Only change code above this line
// };
// // or you can use this method math.pow
// const squareList = (arr) => {
//   // Only change code below this line
//   return arr
//     .filter((num) => num > 0 && num % parseInt(num) === 0)
//     .map((num) => Math.pow(num, 2));
//   // Only change code above this line
// };

// const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
// console.log(squaredIntegers);

// // we sorted global Array without mutating it using the code in the nonMut fxn
// const globalArray = [5, 6, 3, 2, 9];

// function nonMutatingSort(arr) {
//   // Only change code below this line
//   return [].concat(arr).sort((a, b) => b - a);

//   // Only change code above this line
// }

// // THIS CODE WILL GIVE THE SUM OF NUMBERS BETWEEN TWO DIGIT IN AN ARRAY

// function sumAll(arr) {
//   let sumBetween = 0;
//   for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
//     sumBetween += i;
//   }
//   return sumBetween;
// }

// sumAll([1, 4]);

// // THIS FUNCTION  CONVERTS A NORMAL STRING TO LOWER CASE SENTEMCE SEPARATED WITH DASHES
// function spinalCase(str) {
//   return str
//     .split(/\s|_|(?=[A-Z])/)
//     .join("-")
//     .toLowerCase();
// }

// //Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.
// const [first, second] = arguments;
// if (typeof first !== "number") return undefined;
// if (second === undefined) return (second) => addTogether(first, second);
// if (typeof second !== "number") return undefined;
// return first + second;

//UDEMY

//LECTURE ON BIND CALL AND APPLY

// let john = {
//   name: "John",
//   age: 26,
//   job: "teacher",
//   presentation: function (style, timeOfDay) {
//     if (style === "formal") {
//       console.log(
//         "Good" +
//           timeOfDay +
//           ", ladies and gentle men. I am " +
//           this.name +
//           ",  I am a " +
//           this.job +
//           ", and I am " +
//           this.age +
//           "years old"
//       );
//     } else if (style === "friendly") {
//       console.log(
//         `hey whatsup I am ${this.name}, I am a ${this.job}, and I am ${this.age} years old`
//       );
//     }
//   },
// };

// let emily = {
//   name: "Emily",
//   age: 21,
//   job: "gamer",
// };
//john.presentation("friendly", "evening");

//john.presentation.call(emily, "formal", "afternoon");

// let emilyfriendly = john.presentation.bind(emily, "formal", "morning");

// emilyfriendly();

// coding challenge

// function Question(question, answers, correct) {
//   this.question = question;
//   this.answers = this.answers;
//   this.correct = correct;
// }
// Question.prototype.display = function () {
//   console.log(this.question);
//   for (var i = 0; i < this.answers.length; i++) {
//     console.log(i + ": " + this.answers[i]);
//   }
// };

// // we create a new empty object that inherits the contents of the Question fxn.
// let q1 = new Question(
//   `Is Javascript the coolest programming language in the world?`,
//   ["Yes", "No"],
//   0
// );

// let q2 = new Question(
//   `What is the name of this course's teacher?`,
//   ["John", "Micheal", "Jonas"],
//   2
// );

// let q3 = new Question(
//   `What best describes coding?`,
//   ["Boring", "Hard", "Tediuos", "Fun"],
//   3
// );

// let quest = [q1, q2, q3];

// let n = Math.floor(Math.random() * quest.length);

// quest[n].display(); //this generates the random questio betwn 1 and 3

// ES 6

// function Person(name) {
//   this.name = name;
// }
// let friends = ["Bob", "John"];
// Person.prototype.myfriends = function (friends) {
//   let arr = friends.map((el) => {
//     return `${this.name} is friends with ${el}`;
//   });
//   console.log(arr);
// };

// new Person("John").myfriends(friends);

// ES 6 DESTRUCTURING
// let john = ["John", 25];
// const [names, age] = ["John", 26];
// console.log(names, age);

// const obj = {
//   firstName: "John",
//   LastName: "Eyan",
// };

// const { firstName, LastName } = obj; // the key nams must match if not t wouldnt work

// // If you want to chabge the key names you can do that

// const { firstName: a, LastName: b } = obj;

// console.log(a, b);

// function calcAgeRetire(yearOfBirth) {
//   const age = new Date().getFullYear() - yearOfBirth;
//   return [age, 70 - age];
// }

// // destructuring this we have

// const [newAge, retirement] = calcAgeRetire(1990);
// console.log(newAge, retirement);
// // now this takes the returned array from the function and assign the values to the newAge, and retirement variables

// //ARRAY.FROM(). CONVERTING STUFF TO ARRAY

// const boxes = document.querySelectorAll(".box"); // WE know that this returns a nodelist so we have to convert t to an array
// const boxesARR = Array.from(boxes); // this automatically convers it to an array

// // FOR...OF LOOP
// for (const cur of boxesARR) {
//   if (cur.className === "box") {
//     continue;
//   }
//   cur.textContent = `blah`;
// }

// // SPREAD OPERATOR
// let agess = [5, 7, 67];
// let ages = [1, 2, 3, 4];
// function add(...arr) {
//   return arr.reduce((prev, cur) => prev + cur, 0);
// }

// console.log(add(...agess));

// console.log([...agess, ...ages]);

// function isFull(...years) {
//   years.forEach((cur) => console.log(2016 - cur >= 18));
// }
// isFull(1990, 2005, 1890, 1997);

// // MAPS

// const myMap = new Map();

// myMap.set("name", "Daniel Chinemerem");
// myMap.set("school", "FUTO");
// console.log(myMap.get("school"));
// //myMap.delete("school");
// console.log(myMap);
// console.log(myMap.size);

// if (myMap.has("school")) {
//   myMap.delete("school");
// }
// console.log(myMap);

// myMap.set(1, "Javascript is difficult");
// myMap.set(2, "Javascript is fun");
// myMap.set(!true, "Javascript is related to JAVA");

// myMap.forEach((value, key) => {
//   // here, If we relate this to Array  we see that: to value is the element of an array, the key is the index of the array
//   // console.log(`this is ${key} and this is ${value}`);
// });
// for (const [key, value] of myMap.entries()) {
//   // note that the values are saved to new variable called key and value
//   if (typeof key === "string") {
//     console.log(key, value);
//   }
// }
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   add() {
//     console.log(`the user with name ${this.name} is ${this.age} years old`);
//   }
// }
// // let john = new Person("JOHN", 32);
// // console.log(john);

// //console.log(john.add());

// class Athelete extends Person {
//   constructor(name, age, career, medals) {
//     super(name, age);
//     this.career = career;
//     this.medals = medals;
//   }
// }

// let johnny = new Athelete("Simbi", 39, "Footballer", !true);
// console.log(johnny);
// // settieout method
// setTimeout(() => {
//   console.log(`I love chicken`);
// }, 2000);
// // promises
// const myProm = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(
//       `chicken no de cry for night. If e cry for night, I go kill am chop.  `

//       // [1, 2, 3, 4]
//     );
//   }, 1500);
// });

// // myProm.then((id) => {
// //   console.log(id);
// // });

// async function myPromAW() {
//   const rest = await myProm;
//   //console.log(rest);

//   return rest;
// // }
// // myPromAW(); // remember to call  the fxn

// // myPromAW().then((result) => {
// //   console.log(result);
// // });
// function getweather(woeid) {
//   //we must use a cross origin to prefix the api url to bypass JS  api origin rules

//   try {
//     fetch(`https://www.metaweather.com/api/location/${woeid}/`)
//       .then((result) => {
//         return result.json(); // the result returns as a promise, then we attach the json method to it so that we can convert it to a javascript readable file
//       })
//       .then((data) => {
//         // the json method returns a promise so we have to use the then /catch method
//         const today = data.consolidated_weather[0];
//         console.log(`temoerture dey some how ${today.min_temp}`);
//       });
//   } catch (error) {
//     console.log(`for this error ${error}`);
//   }
// }
// getweather(2487956);

// //USING ASYNC AWAIT

// async function getweatherAW(woeid) {
//   try {
//     let result = await fetch(
//       `https://crossorigin.me/https://www.metaweather.com/api/location/${woeid}/`
//     );
//     const dat = await result.json();
//     console.log(dat);
//     return dat; // we can also return the results from this promises, we will use the then method to access them
//   } catch (error) {
//     console.log(`we don tire for this ${error}`);
//   }
// }

// //getweatherAW(44418);
// let dataa = getweatherAW(44418).then((dataa) => {
//   console.log(dataa);
// });
// let i = 0;
// while (i < 5) {
//   let j = 0;
//   while (j < 4) {
//     console.log(3);

//     j++;
//   }
//   console.log(" ");
//   i++;
// }
