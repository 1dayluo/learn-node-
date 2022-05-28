var fs = require('fs');
var rs = fs.createReadStream('./hello.html');
rs.on('open', function() {
    console.log('The file is open');
});
