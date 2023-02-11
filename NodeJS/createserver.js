var http = require('http'); 
var dt = require('./createServer2.js'); 

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("Server 3");
    
    res.end(); 
}).listen(8081); 