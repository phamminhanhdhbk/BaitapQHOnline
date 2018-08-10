var url = require('url');
var fs = require('fs');
function renderHTML(path,res){

fs.readFile(__dirname + path,"utf8",function(error,content){
if (error) {
	console.log(error);
} else 
{
res.writeHead(200,{'Content-Type':'text/html'});
res.write(content);
res.end();


}
});
}



var router = function (req,res) {

 console.log(url.parse(req.url).pathname);
path =url.parse(req.url).pathname;
switch(path) {
	case  "/":
	renderHTML('/index.html',res);
	break;


	case "/about":
	renderHTML('/aboutus.html',res);
	break;


	case "/products" :
	renderHTML('/products.html',res);
	break;

	default :
	 res.write('Chưa tìm thấy vui lòng chọn trang khác');
	 res.end();
}
}
	

module.exports.router = router;