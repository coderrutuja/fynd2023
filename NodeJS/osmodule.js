const os = require('os'); // it is a constant (preferable for operating system module)
var os1 = require('os'); // value is changeable
console.log(os1.networkInterfaces());
console.log(os1.arch()); // gives you the os config type whether or x64 not?