var fs = require('fs'); // import statement
// it imports the filestream from the node modules
// fs = filestream, is an inbuilt module
// modulea: a collection of functionalities which are not user created bit available from node.js

var rs = fs.createReadStream('./demofile.txt'); // path
//var is a shortform for variable used to store local values / temporary values
// reading the outside placed demotext file

rs.on('open', function() {
    console.log('The file is opened');
});