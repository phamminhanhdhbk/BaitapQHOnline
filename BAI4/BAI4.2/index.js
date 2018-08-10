var http = require('http');
var fs = require('fs'); // đọc file

http.createServer(function(req,res){

fs.readFile(__dirname + '/index.html',"utf8",function(error,content){
if (error) {
	console.log(error);
} else 
{
res.writeHead(200,{'Content-Type':'text/html'});
res.write(content);
res.end();
	
}

});


}).listen(6969);

console.log("Bạn hãy truy cậm :localhost:6969");