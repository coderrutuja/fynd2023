// Create a callback function that will read the 5 even numbers from the file containing 10 even numbers
const fs = require("fs").promises();

/**
 * Reads the fisrt 5 even numbers from the file containing 10 even numbers
 */

async function readFirst5Even() {
    // Reading the file with fs module
    const file = await fs.readFile
}

/* var fs = require('fs'); // import statement
//it imports the filestream from the node modules
//fs=filestream is an inbuild module
//module :
//collection of functionalities which are not user sreated bit available from node js
var rs = fs.createReadStream('./demofile.txt'); // ./means path
//var is a shortform for variables used to store local values/temporary values
//reading the outside place demotext file
//event= action performed on an object
//events work with event handler
rs.on('open', function () {
    console.log('The file is open');
});

*/