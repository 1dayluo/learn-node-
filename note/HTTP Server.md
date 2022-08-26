# HTTP Server

示例:

```jsx
// http server
var http = require('http');

// create a server object
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });  //add an http header
    res.write('Hello World!') // write response to the client
    res.end(''); //end the response
}).listen(8081);
```

## http模块

### res参数

res对应请求的response

- `res.writeHehad`  : add an http header
- `res.write` : write response to the client
- `res.end` : end the response

### req参数

The function passed into the `http.createServer()`
 has a `req` argument that represents the request from the client,as an object (http.IncomingMessage object).

### req’s property

- `url` : the part of the url that comes after the domain name

<aside>
💡 req.url can transfer to `url.parse` in order to split the query

</aside>

## url模块

here are built-in modules to easily split the query string into readable parts, such as the URL module.

- `url.parse`

```jsx
// http server
var http = require('http');
**var url = require('url');**

// create a server object
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });  //add an http header
    **var q = url.parse(req.url,true).query;**
    res.write('Hello World! hello '+q.name); // write response to the client
    res.end(''); //end the response
}).listen(8081);
```



## 获取请求数据

参考:

(https://www.runoob.com/nodejs/node-js-get-post.html)

[Node.js GET/POST请求 | 菜鸟教程](https://www.runoob.com/nodejs/node-js-get-post.html)

当数据到达时,req对象会产生一个data事件

数据传输完毕时,req对象会产生一个end事件:代表传输完,并且把data事件中得到的数据保存起来