var http = require('http');
var fs = require('fs'); // đọc file

http.createServer(function(req,res){

res.writeHeader(200,{'Content-Type':'text/html'});
res.write("Phạm Minh Ánh .I'm Student ....");

fs.createReadStream('index.html').pipe(res);


}).listen(6969);

console.log("Bạn hãy truy cậm :localhost:6969");