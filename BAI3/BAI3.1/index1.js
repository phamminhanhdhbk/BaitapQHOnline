// Cách 1: Đọc file không dùng while Không khuyên dùng
var fs = require('fs'); // import thư viện fs
var readString =fs.createReadStream('filedoc.txt');// đọc file

var string;

readString.on('data',function(chunk) //đọc từng đoạn mỗi đoạn được gắng vào chunk
{

 string +=chunk;
});


readString.on('end',function() // Kết thúc
	{
		console.log(string);
	});