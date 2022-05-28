var http = require('http');
var url = require('url');
var fs = require('fs');


http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var file_name = q.query.choice +".html";
    fs.readFile(file_name, function(err, data) {
        if (err) {
            res.rawListeners(404, {'Content-Type': 'text/html'});
            return res.end("404 Not Found! \n err: "+ err);
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8081);