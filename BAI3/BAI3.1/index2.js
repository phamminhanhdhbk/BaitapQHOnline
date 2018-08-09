// Cách 2: Đọc file dùng while khuyên nên dùng
var fs = require('fs'); // import thư viện fs
var readString =fs.createReadStream('filedoc.txt');// đọc file

var string="";
var chunk ;

readString.on('readable',function() //đọc từng đoạn mỗi đoạn được gắng vào chunk
{

	while((chunk =readString.read()) != null)
	{
     string += chunk;

	}



});


readString.on('end',function() // Kết thúc
	{
		console.log(string);
	});