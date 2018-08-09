var http =require('http'),
fs =require('fs');

var path ='test.mp4';


// khởi tạo webserver
var stat =fs.statSync(path); //đồng bộ phim
var total =stat.size; // kiểm tra kích thước của phim

http.createServer(function(req,res){

	// res.writeHead(200,{'Content-Type':'text/plain'});
	res.writeHead(200,{'Content-Length':total ,'Content-Type':'video/mp4'});
	fs.createReadStream(path).pipe(res);
}).listen(6969,'127.0.0.1'); // trả về domain gì .port nào ...