const { create } = require('domain');
var fs = require('fs');
http = require('http');
const { HttpError } = require('koa');

function createFile(filename){
fs.appendFile(filename, 'Hello content', function(err){
    if(err) throw err;
    console.log('Saved!');
});};


http.createServer(function(req,res){
    fs.readFile('mynewfile1.txt',function(err,data){
        if(err){
            createFile('mynewfile1.txt');
        } else {
            res.write(data);
            return res.end();
        }
    });
}
).listen('8081');
