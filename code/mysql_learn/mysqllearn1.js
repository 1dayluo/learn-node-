var mysql = require('mysql');
//create connection
var con = mysql.createConnection({
    host: 'localhost',
    user: "node",
    password: "123456" 
});

function query(sql) {
    res = con.query(sql, function(err, result,fields) {
        if(err) throw err;
        if(sql.includes('select')) {
            console.log(result);
        };
         if(sql.includes('create')) {
             console.log('[+]created success!');
         };
         if(sql.includes('insert')) {
             console.log('[+]already success');
         };
    });
}

// insert multiple records
function insert_multi(values, con) {
    var sql = "INSERT INTO customers (name, address) VALUES ?";
    con.query(sql, [values], function(err, result) {
        if(err) throw err;
        console.log('Number of records inserted: ' + result.affectedRows);
    });
}


//connect
con.connect(function(err) {
    if(err) throw err;
    console.log("Info:Connected!");
    query('use node_project');

    query('create table if not exists customers (name VARCHAR(255), address VARCHAR(255))');
    query("insert into customers (name, address) values ('Company Inc','Highway37')");
    var values = [
        ['John', 'Highway 71'],
        ['Peter', 'Lowstreet 4'],
        ['Amy', 'Apple st 652'],
        ['Hannah', 'Mountain 21'],
        ['Michael', 'Valley 345'],
        ['Sandy', 'Ocean blvd 2'],
        ['Betty', 'Green Grass 1'],
        ['Richard', 'Sky st 331'],
        ['Susan', 'One way 98'],
        ['Vicky', 'Yellow Garden 2'],
        ['Ben', 'Park Lane 38'],
        ['William', 'Central st 954'],
        ['Chuck', 'Main Road 989'],
        ['Viola', 'Sideway 1633']
      ];
    // insert_multi(values, con);
    result = query("select name, address from customers");
  
});

