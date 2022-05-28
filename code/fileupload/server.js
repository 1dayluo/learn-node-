var http = require('http');
var formidable = require('formidable');
var fs = require('fs');
var mv = require('mv');




http.createServer(function (req, res) {
    if (req.url == '/fileupload') {
        var form = new formidable.IncomingForm();
        form.parse(req, function(err, field, files){
            var oldpath = files.filetoupload.filepath;
            var newpath = __dirname + '/temp/' + files.filetoupload.originalFilename;
            console.log(newpath);
            mv(oldpath, newpath, function(err) {
                if (err) throw err;
                res.write('File uploaded');
                res.end();
            })

        });
    } else {
        fs.readFile('fileup.html', function(err, data) {
            if (err) {
                res.writeHead(400, {'Content-Type': 'text/html'});
                res.write('Something wrong....');
                console.log('err!:'+err);
                res.end();
            } else {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(data);
                res.end();
            }
        });

        
    }
}).listen(8081);