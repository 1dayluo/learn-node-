
// http server
var http = require('http');
var url = require('url');

// create a server object
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });  //add an http header
    var q = url.parse(req.url,true).query;
    res.write('Hello World! hello '+q.name); // write response to the client
    res.end(''); //end the response
}).listen(8081);


