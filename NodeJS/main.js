var http = require('http'); //importing the inbuilt http module
var dt = require('./ownModule.js'); // calling own module from another / user defined module
// dt: today's date

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("The date and time are currently: " + dt.getCurrentDate());
    //datetime is being fected from the outside module
    //using the content type mentioned above as text/html user defined module
    res.end(); // ending the writing functionalities for a request response function
}).listen(8080); // mentioning which port our application will run on the server