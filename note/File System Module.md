# File System Module

## fs

```jsx
var fs = require('fs');
```

Common use for the File System module:

- Read files
- Create files
- Update files
- Delete files
- Rename files

### Read FIles

- `fs.readFile()`

```jsx
var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    fs.readFile('hello.html', function(err, data) {
        if(err){
            res.write('err:'+err);
            return res.end()
        }
        res.writeHead(200,{'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8081);
```

### Create Files

- `fs.appendFile()`
- `fs.open()`
- `fs.writeFile()`

The `fs.appendFile()` method appends specified content to a file. If the file does not exist, the file will be created

The `fs.open()`
 method takes a "flag" as the second argument, if the flag is "w" for "writing",If the file does not exist, an empty file is created:

The `fs.writeFile()`
 method replaces the specified file and content if it exists.If the file does not exist, a new file, containing the specified content, will be created:

### Update Files

- `fs.appendFile()`
- `fs.writeFile()`

The `fs.appendFile()` method appends the specified content at the end of the specified file:

The `fs.writeFile()`
 method replaces the specified file and content:

### Delete Files

- `fs.unlink`

### Rename Files

- `fs.rename()`
