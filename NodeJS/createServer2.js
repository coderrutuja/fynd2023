var http = require('http'); 
var cs = require('./createserver.js'); 

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("Server 3");
    
    res.end(); 
}).listen(8000); 