// hoisting
p = 5;
console.log(p);
// here hoisting is done where: declaration goes from top to bottom
var p = 5;


// difference between let and var
let a = 1; 
var b = 4; 
{
  let a = 2; // can't be changed
  var b = 20; // can be changed
}

// let variable can't be changed outside of scope
// var variable can be changed

// a is 1 and b is 20
console.log(a);
console.log(b);

// difference between null and undefined
let x = null;
let y;

if(x === null)
console.log("true"); // Output: true
else
console.log("false");
if(y === null)
console.log("true")
else
console.log("false"); // Output: false

console.log(typeof x); // Output: object
console.log(typeof y); // Output: undefined