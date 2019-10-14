// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

// let myFunction = function () {
// console.log("Function was invoked!");
// };
// myFunction();

let my_function = () => {
  console.log("Function was invoked!");
};

my_function();

// let anotherFunction = function (param) {
//   return param;
// };
// anotherFunction("Example");

let another_function = (param) => (param) ;

const result2 = another_function("Example");
console.log(result2);

// let add = function (param1, param2) {
//   return param1 + param2;
// };
// add(1,2);

let add = (param1 , param2) => (param1 + param2) ;

const result3 = add(1,2) ;
console.log(result3);

// let subtract = function (param1, param2) {
//   return param1 - param2;
// };
// subtract(1,2);

let subtract = (param1 , param2) => (param1 - param2) ;

const result4 = subtract(1,2) ;
console.log(result4);

// Stretch

// exampleArray = [1,2,3,4];
// const triple = exampleArray.map(function (num) {
//   return num * 3;
// });
// console.log(triple);