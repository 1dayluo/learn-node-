var http = require('http');
var fs = require('fs');

var filename = 'hello.html';

http.createServer(function (req, res) {
    fs.readFile('hello.html', function(err, data) {
        if(err){
            console.log('failed! err:'+err);
        }
        res.writeHead(200,{'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8081);
