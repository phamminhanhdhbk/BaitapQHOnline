var http = require('http'),
fs = require('fs');
var app =require('./app.js');

http.createServer(app.router).listen(6969);

console.log("Bạn hãy truy cận http://localhost:6969");